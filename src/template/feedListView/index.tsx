import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {IFeedListView} from '../../types';
import {ItemSeparator} from '../../components';
import RenderFeedItem from './renderFeedItem';
import {paginatedFeeds_paginatedFeeds} from '../../graphql/queries/__generated__/paginatedFeeds';

const Separator = () => {
  return <ItemSeparator styles={{marginHorizontal: 20}} />;
};

const FeedListView = ({
  paginatedFeeds,
  fetchNext,
  fetchLatest,
  onComment,
  onLike,
  onRefetch,
  isLoading,
}: IFeedListView) => {
  const renderItem = ({item}: {item: paginatedFeeds_paginatedFeeds}) => (
    <RenderFeedItem
      item={item}
      feedId={item.feedId}
      toggleLike={onLike}
      onComment={onComment}
      key={item.feedId}
    />
  );

  return (
    <FlatList
      onRefresh={onRefetch}
      onEndReached={fetchNext}
      data={paginatedFeeds}
      refreshing={isLoading}
      keyExtractor={item => item.feedId}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{paddingBottom: 150}}
    />
  );
};

export default FeedListView;
