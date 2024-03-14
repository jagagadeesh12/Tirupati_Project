/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserAddress
// ====================================================

export interface updateUserAddress_updateUser {
  __typename: "User";
  communicationAddress: string | null;
  primaryAddress: string | null;
}

export interface updateUserAddress {
  updateUser: updateUserAddress_updateUser;
}

export interface updateUserAddressVariables {
  inp: UpdateUserInput;
}
