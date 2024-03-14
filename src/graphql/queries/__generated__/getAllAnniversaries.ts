/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllAnniversaries
// ====================================================

export interface getAllAnniversaries_getAllUpcomingAnniversaries {
  __typename: "User";
  profileImage: string | null;
  fullName: string;
  dateOfJoining: any;
  userId: string;
  workExperience: number | null;
  dob: any;
}

export interface getAllAnniversaries {
  getAllUpcomingAnniversaries: getAllAnniversaries_getAllUpcomingAnniversaries[];
}
