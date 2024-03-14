/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BloodGroup } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getPersonalUsersInfo
// ====================================================

export interface getPersonalUsersInfo_getUserById_role {
  __typename: "Role";
  roleName: string;
}

export interface getPersonalUsersInfo_getUserById_groups {
  __typename: "Group";
  groupName: string;
}

export interface getPersonalUsersInfo_getUserById {
  __typename: "User";
  bloodGroup: BloodGroup | null;
  dob: any;
  gender: string;
  employeeId: string;
  role: getPersonalUsersInfo_getUserById_role;
  groups: getPersonalUsersInfo_getUserById_groups;
}

export interface getPersonalUsersInfo {
  getUserById: getPersonalUsersInfo_getUserById;
}
