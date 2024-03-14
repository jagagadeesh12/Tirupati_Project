/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserImage
// ====================================================

export interface updateUserImage_updateUser {
  __typename: "User";
  profileImage: string | null;
}

export interface updateUserImage {
  updateUser: updateUserImage_updateUser;
}

export interface updateUserImageVariables {
  inp: UpdateUserInput;
}
