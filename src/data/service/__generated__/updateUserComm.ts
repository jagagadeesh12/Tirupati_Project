/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserComm
// ====================================================

export interface updateUserComm_updateUser {
  __typename: "User";
  communicationAddress: string | null;
}

export interface updateUserComm {
  updateUser: updateUserComm_updateUser;
}

export interface updateUserCommVariables {
  inp: UpdateUserInput;
}
