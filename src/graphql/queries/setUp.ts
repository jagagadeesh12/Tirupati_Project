import {gql} from '@apollo/client';

export const ALL_USER_DATA = gql`
  query getAllAnniversaries {
    getAllUpcomingAnniversaries {
      profileImage
      fullName
      dateOfJoining
      userId
      workExperience
      dob
    }
  }
`;
