import {gql} from '@apollo/client';

const DELETE_FEED = gql`
  mutation deleteFeed($feedId: String!) {
    deleteFeed(feedId: $feedId)
  }
`;

const REPOST_FEED = gql`
  mutation repost($repostid: String!, $inp: CreateFeedInput!) {
    repostFeed(repostid: $repostid, repostFeedInput: $inp) {
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
          createdAt
          feedId
          user {
            fullName
            profileImage
          }
        }
      }
    }
  }
`;
const CREATE_FEED = gql`
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
          createdAt
          feedId
          user {
            fullName
            profileImage
          }
        }
      }
    }
  }
`;

const LIKE_FEED = gql`
  mutation toggleLike($feedId: String!) {
    likeOrUnlikeFeed(feedId: $feedId) {
      feedId
      likes
    }
  }
`;

export const TOGGLE_SAVE_FEED = gql`
  mutation saveUnsaveApi($feedId: String!) {
    saveUnSaveFeed(feedId: $feedId)
  }
`;

export {CREATE_FEED, LIKE_FEED, DELETE_FEED, REPOST_FEED};
