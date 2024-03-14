/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_getPaginatedUsers {
  __typename: "User";
  userId: string;
  authId: string;
}

export interface getUsers {
  getPaginatedUsers: getUsers_getPaginatedUsers[];
}

export interface getUsersVariables {
  page?: number | null;
  limit?: number | null;
}
