/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserOfPost
// ====================================================

export interface fetchUserOfPost_getUserById {
  __typename: "User";
  userId: string;
  fullName: string;
  profileImage: string | null;
}

export interface fetchUserOfPost {
  getUserById: fetchUserOfPost_getUserById;
}
