/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: update_primary_address
// ====================================================

export interface update_primary_address_updateUser {
  __typename: "User";
  primaryAddress: string | null;
}

export interface update_primary_address {
  updateUser: update_primary_address_updateUser;
}

export interface update_primary_addressVariables {
  inp: UpdateUserInput;
}
