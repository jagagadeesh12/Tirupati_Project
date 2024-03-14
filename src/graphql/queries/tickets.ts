import {gql} from '@apollo/client';

export const GET_ALL_MY_TICKETS = gql`
query getAllTickets{
    getAllTickets{
      ticketId
      # organisationId
      userId
      assetId
      description
      ticketStatus
      # assignedTo
      createdAt
      updatedAt
      user{
        userId
        profileImage
      }
    }
  }
`;




