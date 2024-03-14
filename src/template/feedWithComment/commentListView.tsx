import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ICommentListView, IFeedListView} from '../../types';
// import RenderComment from './RenderComment';
// RenderComment
import {ItemSeparator, ListFooterComponent} from '../../components';
import {getAllComments_getAllFeeds} from '../../graphql/queries/__generated__/getAllComments';
import RenderThreadComment from './renderThreadItem';
import RenderComment from './renderComment';

const CommentListView = ({
  getAllFeeds = [],
  onComment,
  onLike,
  parentComment,
}: ICommentListView) => {
  const renderItem = ({item}: {item: getAllComments_getAllFeeds}) => (
    <View style={{paddingTop: 10}}>
      <RenderComment
        item={item}
        toggleLike={onLike}
        onComment={onComment}
        key={item.feed}
      />
    </View>
  );
  const renderThreadedView = ({
    item,
    index,
  }: {
    item: getAllComments_getAllFeeds;
    index: number;
  }) => {
    console.log('index', index, 'ssdd', WITH_PARENT_COMMENT.length);
    return (
      <RenderThreadComment
        item={item}
        toggleLike={onLike}
        onComment={onComment}
        key={item.feed}
        isLastIndex={index === getAllFeeds.length}
      />
    );
  };

  const WITH_PARENT_COMMENT = [{...parentComment}, ...getAllFeeds];
  return (
    <>
      {parentComment ? (
        <FlatList
          data={WITH_PARENT_COMMENT}
          showsVerticalScrollIndicator={false}
          renderItem={renderThreadedView}
          style={{marginTop: 10}}
          ListFooterComponent={ListFooterComponent}
          contentContainerStyle={{paddingBottom: 20}}
          // ItemSeparatorComponent={ItemSeparator}
        />
      ) : (
        <FlatList
          data={getAllFeeds || []}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          ListFooterComponent={ListFooterComponent}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </>
  );
};

export default CommentListView;
