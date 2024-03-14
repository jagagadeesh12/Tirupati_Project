import {gql} from '@apollo/client';

export const UPDATE_USER_ADDRESS = gql`
  mutation updateUserAddress($inp: UpdateUserInput!) {
    updateUser(updateUserInput: $inp) {
      communicationAddress
      primaryAddress
    }
  }
`;




export const GET_COMMUNICATION_ADRESS = gql`
mutation updateUserAddress($inp: UpdateUserInput!) {
  updateUser(updateUserInput: $inp) {
    communicationAddress
  }
}
`