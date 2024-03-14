/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BloodGroup {
  AB_NEGATIVE = 'AB_NEGATIVE',
  AB_POSITIVE = 'AB_POSITIVE',
  A_NEGATIVE = 'A_NEGATIVE',
  A_POSITIVE = 'A_POSITIVE',
  B_NEGATIVE = 'B_NEGATIVE',
  B_POSITIVE = 'B_POSITIVE',
  O_NEGATIVE = 'O_NEGATIVE',
  O_POSITIVE = 'O_POSITIVE',
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  OTHERS = 'OTHERS',
}

export enum Stack {
  ADMIN = 'ADMIN',
  BACKEND = 'BACKEND',
  DEVOPS = 'DEVOPS',
  FRONTEND = 'FRONTEND',
  FULLSTACK = 'FULLSTACK',
  HR = 'HR',
  LEADERSHIP = 'LEADERSHIP',
  OTHER = 'OTHER',
}

export interface CheckInInput {
  checkInLocation: LatLongInput;
}

export interface CheckOutInput {
  timeSheetId: string;
  checkOutLocation: LatLongInput;
}

export interface CreateFeedInput {
  feed?: string | null;
  feedImage?: string | null;
  parentId?: string | null;
}

export interface LatLongInput {
  latitude: string;
  longitude: string;
}

export interface UpdateUserInput {
  profileImage?: string | null;
  mobile?: string | null;
  gender?: Gender | null;
  dob?: string | null;
  bloodGroup?: BloodGroup | null;
  stack?: Stack | null;
  primaryAddress?: string | null;
  communicationAddress?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
