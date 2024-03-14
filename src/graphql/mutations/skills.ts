import {gql} from '@apollo/client';

export const UPDATE_USER_SKILLS = gql`
  mutation ($inp: UpdateUserInput!) {
    updateUser(updateUserInput: $inp) {
      skills{
        technology
      }
    }
  }
`;