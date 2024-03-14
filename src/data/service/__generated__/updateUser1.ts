/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUser1
// ====================================================

export interface updateUser1_updateUser {
  __typename: "User";
  profileImage: string | null;
}

export interface updateUser1 {
  updateUser: updateUser1_updateUser;
}

export interface updateUser1Variables {
  inp: UpdateUserInput;
}
