import {View, ScrollView} from 'react-native';
import React from 'react';
import {IFeedWithCommentTemp} from '../../types';
import Header from './header';
import RenderFeedItem from '../feedListView/renderFeedItem';
import {CustomActivityIndicator, ItemSeparator} from '../../components';
import {paginatedFeeds_paginatedFeeds} from '../../graphql/queries/__generated__/paginatedFeeds';
import CommentListView from './commentListView';
import {Loader} from '../../screens';
import styles from './styles';

const FeedWithComment = ({
  item,
  onBackBtn,
  parentFeed = null,
  rootFeed,
  comments,
  onLike,
  onComment,
  isCommentsLoading,
}: IFeedWithCommentTemp) => {
  if (isCommentsLoading) {
    return <CustomActivityIndicator isLoading />;
  }
  return (
    <>
      <Header onBackBtn={onBackBtn} />
      <ScrollView>
        <RenderFeedItem item={item} />
        <ItemSeparator styles={styles.itemSeparatorContainer} />
        <View style={styles.childContainer}>
          <CommentListView
            onLike={onLike}
            onComment={onComment}
            getAllFeeds={comments || []}
            parentComment={parentFeed}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default FeedWithComment;
