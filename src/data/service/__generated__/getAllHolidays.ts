/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllHolidays
// ====================================================

export interface getAllHolidays_getAllHolidays {
  __typename: "Holiday";
  holidayName: string;
  holidayDescription: string;
  holidayDate: any;
  holidayImage: string;
}

export interface getAllHolidays {
  getAllHolidays: getAllHolidays_getAllHolidays[];
}

export interface getAllHolidaysVariables {
  inp: string;
}
