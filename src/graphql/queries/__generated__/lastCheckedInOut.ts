/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: lastCheckedInOut
// ====================================================

export interface lastCheckedInOut_lastCheckedInOut {
  __typename: "TimeSheet";
  timeSheetId: string;
  /**
   * Check In Time of the User
   */
  checkIn: any;
  /**
   * Check Out Time of the User
   */
  checkOut: any | null;
  /**
   * Date
   */
  date: any;
  updatedAt: any;
  createdAt: any;
}

export interface lastCheckedInOut {
  lastCheckedInOut: lastCheckedInOut_lastCheckedInOut | null;
}
