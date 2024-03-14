/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateFeedInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createFeed
// ====================================================

export interface createFeed_createFeed {
  __typename: "Feed";
  feed: string | null;
  feedImage: string | null;
}

export interface createFeed {
  createFeed: createFeed_createFeed;
}

export interface createFeedVariables {
  inp: CreateFeedInput;
}
