import {gql} from '@apollo/client';

export const CREATE_FEED = gql`
  mutation createFeed($inp: CreateFeedInput!) {
    createFeed(createFeedInput: $inp) {
      feed
      parentId
      feedImage
      updatedAt
      likes
      feedId
      user {
        userId
        fullName
        profileImage
      }
      repost {
        feeds {
          feed
          feedImage
          user {
            fullName
            createdAt
          }
        }
      }
    }
  }
`;
