import {gql} from '@apollo/client';

export const GET_SKILLS = gql`

query getUserById{
  getUserById{

    skills{
      technology
    }
  }
}

`;
