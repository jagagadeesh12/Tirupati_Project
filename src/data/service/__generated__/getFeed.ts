/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFeed
// ====================================================

export interface getFeed_getAllFeeds {
  __typename: "Feed";
  feedId: string;
  feed: string | null;
  feedImage: string | null;
  likes: string[] | null;
  createdAt: any;
}

export interface getFeed {
  getAllFeeds: getFeed_getAllFeeds[];
}
