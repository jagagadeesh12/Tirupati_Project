import {
  getAllFeeds,
  getAllFeeds_getAllFeeds,
} from '../graphql/__generated__/getAllFeeds';
import {
  getAllComments,
  getAllComments_getAllFeeds,
} from '../graphql/queries/__generated__/getAllComments';
import {
  paginatedFeeds,
  paginatedFeeds_paginatedFeeds,
} from '../graphql/queries/__generated__/paginatedFeeds';

export interface IFeedViewHeader {
  fullName: string;
  time: any;
}

export interface IFeedListView extends paginatedFeeds {
  isLoading: boolean;
  fetchNext: () => void;
  fetchLatest: () => void;
  onLike: (feedId: string) => void;
  onRefetch?: () => void;
  onComment: (feed: paginatedFeeds_paginatedFeeds) => void;
}
//IRenderFeedItem is user in both RenderFeedItem and RenderComment
export interface IRenderFeedItem {
  item: paginatedFeeds_paginatedFeeds;
  onComment: (feed: paginatedFeeds_paginatedFeeds) => void;
  toggleLike: (feedId: string) => void;
  isPostFeed?: boolean;
  commentsCount?: number;
}

export interface IFeedWithCommentTemp {
  onBackBtn: () => void;
  comments: getAllComments_getAllFeeds[];
  isCommentsLoading: boolean;
  rootFeed: paginatedFeeds_paginatedFeeds | getAllFeeds_getAllFeeds;
  parentFeed: paginatedFeeds_paginatedFeeds | getAllFeeds_getAllFeeds;
  onLike: (feedId: string) => void;
  onComment: (feed: paginatedFeeds_paginatedFeeds) => void;
}

export interface ICommentListView extends getAllComments {
  parentComment: getAllFeeds_getAllFeeds | null;
  onLike: (feedId: string) => void;
  onComment: (feed: paginatedFeeds_paginatedFeeds) => void;
}

export interface IRenderComment {
  item: getAllComments_getAllFeeds;
  onComment: (feed: paginatedFeeds_paginatedFeeds) => void;
  toggleLike: (feedId: string) => void;
  isPostFeed?: boolean;
  isLastIndex?: boolean;
}

export interface IIconWithCount {
  onPress: () => void;
  count?: number;
  name: string;
  color: string;
  variant?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone';
}
