/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBirthAnniversaries
// ====================================================

export interface getBirthAnniversaries_getUpcomingAnniversaries {
  __typename: "User";
  profileImage: string | null;
  fullName: string;
  dob: any;
}

export interface getBirthAnniversaries {
  getUpcomingAnniversaries: getBirthAnniversaries_getUpcomingAnniversaries[];
}
