/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckInInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: checkIn
// ====================================================

export interface checkIn_checkIn_checkInLocation {
  __typename: "LatLong";
  /**
   * Latitude of the Check In Location
   */
  latitude: string;
  /**
   * Longitude of the Check In Location
   */
  longitude: string;
}

export interface checkIn_checkIn {
  __typename: "TimeSheet";
  /**
   * Check In Time of the User
   */
  checkIn: any;
  /**
   * Check In Location of the User
   */
  checkInLocation: checkIn_checkIn_checkInLocation | null;
  /**
   * Date
   */
  date: any;
  timeSheetId: string;
}

export interface checkIn {
  checkIn: checkIn_checkIn;
}

export interface checkInVariables {
  inp: CheckInInput;
}
