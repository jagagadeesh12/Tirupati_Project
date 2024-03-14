import {gql} from '@apollo/client';

export const LIKE_FEED = gql`
  mutation toggleLike($feedId: String!) {
    likeOrUnlikeFeed(feedId: $feedId) {
      feedId,
      likes
    }
  }
`;
