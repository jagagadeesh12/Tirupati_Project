/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PaginatedFeed
// ====================================================

export interface PaginatedFeed_paginatedFeeds {
  __typename: "Feed";
  feedId: string;
  feed: string | null;
  feedImage: string | null;
  createdAt: any;
  likes: string[] | null;
}

export interface PaginatedFeed {
  paginatedFeeds: PaginatedFeed_paginatedFeeds[];
}
