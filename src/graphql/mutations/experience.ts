import {gql} from '@apollo/client';

export const CREATE_EXPERIENCE = gql`
  mutation createExperience($UpdateExperienceInput: CreateExperienceInput!) {
    createExperience(createExperienceInput: $UpdateExperienceInput) {
      jobRole
      experienceId
      startDate
      endDate
      description
      organisationName
      skills{
      technology
      stack
      skillExperience
      isPrimary
      expertise
      
    }
    }
  }
`;

export const UPDATE_EXPERIENCE = gql`
  mutation updateExperience(
    $experienceId: String!
    $UpdateExperienceInput: UpdateExperienceInput!
  ) {
    updateExperience(
      experienceId: $experienceId
      UpdateExperienceInput: $UpdateExperienceInput
    ) {
      experienceId
      jobRole
      organisationName
      startDate
      endDate
      description
      skills{
      technology
      stack
      skillExperience
      isPrimary
      expertise
      
    }
    }
  }
`;
