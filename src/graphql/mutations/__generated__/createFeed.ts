/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateFeedInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createFeed
// ====================================================

export interface createFeed_createFeed_user {
  __typename: "User";
  userId: string;
  fullName: string;
  profileImage: string | null;
}

export interface createFeed_createFeed {
  __typename: "Feed";
  feed: string | null;
  parentId: string;
  feedImage: string | null;
  updatedAt: any;
  likes: string[] | null;
  feedId: string;
  user: createFeed_createFeed_user;
}

export interface createFeed {
  createFeed: createFeed_createFeed;
}

export interface createFeedVariables {
  inp: CreateFeedInput;
}
