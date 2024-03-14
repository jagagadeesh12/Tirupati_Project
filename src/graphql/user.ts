import {gql} from '@apollo/client';

export const FETCH_USER_OF_POST = gql`
  query fetchUserOfPost {
    getUserById {
      userId
      fullName
      profileImage
    }
  }
`;
