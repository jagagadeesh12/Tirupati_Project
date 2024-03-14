/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: paginatedFeeds
// ====================================================

export interface paginatedFeeds_paginatedFeeds_user {
  __typename: "User";
  userId: string;
  fullName: string;
  profileImage: string | null;
}

export interface paginatedFeeds_paginatedFeeds {
  __typename: "Feed";
  feed: string | null;
  parentId: string;
  feedImage: string | null;
  updatedAt: any;
  likes: string[] | null;
  feedId: string;
  user: paginatedFeeds_paginatedFeeds_user;
}

export interface paginatedFeeds {
  paginatedFeeds: paginatedFeeds_paginatedFeeds[];
}

export interface paginatedFeedsVariables {
  startIndex?: number | null;
  perPage?: number | null;
}
