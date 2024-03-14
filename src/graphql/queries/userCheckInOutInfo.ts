import {gql} from '@apollo/client';

export const USER_CHECK_IN_OUT_INFO = gql`
  query lastCheckedInOut {
    lastCheckedInOut {
      timeSheetId
      checkIn
      checkOut
      date
      updatedAt
      createdAt
    }
  }
`;
