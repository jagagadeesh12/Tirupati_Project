/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfileUsers
// ====================================================

export interface getProfileUsers_getUserById {
  __typename: "User";
  fullName: string;
  email: string;
  mobile: string | null;
  profileImage: string | null;
  userId: string;
  locationId: string;
}

export interface getProfileUsers {
  getUserById: getProfileUsers_getUserById;
}
