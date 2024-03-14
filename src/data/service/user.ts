import {gql} from '@apollo/client';

export const FETCH_USERS = gql`
  query getUsers($page: Int, $limit: Int) {
    getPaginatedUsers(page: $page, limit: $limit) {
      userId
      authId
    }
  }
`;

export const HOME_USER_INFO = gql`
  query getHomeUserInfo {
    getUserById {
      fullName
    }
  }
`;
export const USER_CONTACT_INFO = gql`
  query getHomeUserContactInfo {
    getUserById {
      mobile
      emergencyContact
      contactName
      contactRelation
    }
  }
`;

export const GET_LOCATION_ID = gql`
  query getLocationId {
    getUserById {
      locationId
    }
  }
`;

export const PROFILE_USER_INFO = gql`
  query getProfileUsers {
    getUserById {
      fullName
      email
      mobile
      profileImage
      userId
      locationId
    }
  }
`;

export const FETCH_PERSONAL_INFO = gql`
  query getPersonalUsersInfo {
    getUserById {
      bloodGroup
      dob
      gender
      employeeId
      role {
        roleName
      }
      groups {
        groupName
      }
    }
  }
`;
export const FETCH_HOLIDAYS = gql`
  query getAllHolidays($inp: String!) {
    getAllHolidays(locationId: $inp) {
      holidayName
      holidayDescription
      holidayDate
      holidayImage
    }
  }
`;

export const CHECK_IN = gql`
  mutation checkIn($inp: CheckInInput!) {
    checkIn(checkInInput: $inp) {
      checkIn
      checkInLocation {
        latitude
        longitude
      }
      date
      timeSheetId
    }
  }
`;
export const CHECK_OUT = gql`
  mutation checkOut($inp: CheckOutInput!) {
    checkOut(checkOutInput: $inp) {
      checkOut
      checkOutLocation {
        latitude
        longitude
      }
      date
      timeSheetId
    }
  }
`;

export const ATTENDANCE_LAPSE = gql`
  query getDaysAttendedLate {
    getMonthlyUserTimeSheet {
      punctualDays
      attendedDays
    }
  }
`;

export const UPADATE_USER = gql`
  mutation updateUser($inp: UpdateUserInput!) {
    updateUser(updateUserInput: $inp) {
      mobile
      emergencyContact
      contactName
      contactRelation
    }
  }
`;
export const UPADATE_USER_PROFILE = gql`
  mutation updateUserImage($inp: UpdateUserInput!) {
    updateUser(updateUserInput: $inp) {
      profileImage
    }
  }
`;

// export const CREATE_FEED = gql`
//   mutation createFeed($inp: CreateFeedInput!) {
//     createFeed(createFeedInput: $inp) {
//       feed
//       feedImage
//     }
//   }
// `;

export const GET_ADRESS = gql`
  query getUserByIId {
    getUserById {
      primaryAddress
      communicationAddress
    }
  }
`;

export const GET_UPCOMINGANNIVERSARIES = gql`
  query getUpcomingAnniversaries {
    getAllUpcomingAnniversaries {
      profileImage
      fullName
      dateOfJoining
      userId
    }
  }
`;
export const BIRTHDAYSANNIVERSARIES = gql`
  query getUpcomingBirthdays {
    getAllUpcomingBirthdays {
      profileImage
      fullName
      dob
      userId
    }
  }
`;
export const INTERNALJOBS = gql`
  query getAllJobs {
    getAllJobs {
      jobId
      title
      location
      experienceRequired
      jobType
      description
      qualificationRequired
      project
      responsibility
      budget
      hiringManager
      expirationDate
    }
  }
`;

export const GET_ALL_EXPERIENCE = gql`
  query getExperience {
    getExperiencesByUserId {
      jobRole
      experienceId
      startDate
      endDate
      description
      organisationName
      skills {
        technology
      }
    }
  }
`;

export const GET_ALL_LEAVES_REQUEST = gql`
  query getAllLeaveRequest {
    getAllLeaveRequest {
      requestStatus
      leaveRequestId
      organisationId
      leaveType
      startDate
      endDate
      reason
      numberOfDays
      createdAt
      updatedAt
    }
  }
`;
