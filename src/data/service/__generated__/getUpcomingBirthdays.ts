/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUpcomingBirthdays
// ====================================================

export interface getUpcomingBirthdays_getAllUpcomingBirthdays {
  __typename: "User";
  profileImage: string | null;
  fullName: string;
  dob: any;
  userId: string;
}

export interface getUpcomingBirthdays {
  getAllUpcomingBirthdays: getUpcomingBirthdays_getAllUpcomingBirthdays[];
}
