import {gql} from '@apollo/client';

export const CREATE_TICKET = gql`
  mutation createTickets($ticketInput: TicketInput!) {
    createTicket(ticketInput: $ticketInput) {
      ticketId
      organisationId
      userId
    }
  }
`;
