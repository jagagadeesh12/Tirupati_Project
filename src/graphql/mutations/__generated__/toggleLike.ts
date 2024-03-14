/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: toggleLike
// ====================================================

export interface toggleLike_likeOrUnlikeFeed {
  __typename: "Feed";
  feedId: string;
}

export interface toggleLike {
  likeOrUnlikeFeed: toggleLike_likeOrUnlikeFeed;
}

export interface toggleLikeVariables {
  feedId: string;
}
