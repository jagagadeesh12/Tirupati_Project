/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllComments
// ====================================================

export interface getAllComments_getAllFeeds_user {
  __typename: "User";
  userId: string;
  fullName: string;
  profileImage: string | null;
}

export interface getAllComments_getAllFeeds {
  __typename: "Feed";
  feed: string | null;
  parentId: string;
  feedImage: string | null;
  updatedAt: any;
  likes: string[] | null;
  feedId: string;
  user: getAllComments_getAllFeeds_user;
}

export interface getAllComments {
  getAllFeeds: getAllComments_getAllFeeds[];
}

export interface getAllCommentsVariables {
  feedId?: string | null;
}
