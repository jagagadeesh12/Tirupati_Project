/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckOutInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: checkOut
// ====================================================

export interface checkOut_checkOut_checkOutLocation {
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

export interface checkOut_checkOut {
  __typename: "TimeSheet";
  /**
   * Check Out Time of the User
   */
  checkOut: any | null;
  /**
   * Check Out Location of the User
   */
  checkOutLocation: checkOut_checkOut_checkOutLocation | null;
  /**
   * Date
   */
  date: any;
  timeSheetId: string;
}

export interface checkOut {
  checkOut: checkOut_checkOut;
}

export interface checkOutVariables {
  inp: CheckOutInput;
}
