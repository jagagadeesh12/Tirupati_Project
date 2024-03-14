import {gql} from '@apollo/client';

export const PAGINATED_FEED = gql`
  query paginatedFeeds($startIndex: Int, $perPage: Int) {
    paginatedFeeds(startIndex: $startIndex, limit: $perPage) {
      feed
      parentId
      feedImage
      updatedAt
      createdAt
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

export const PAGINATED_MY_FEED = gql`
  query getAllMyFeeds($startIndex: Int, $perPage: Int) {
    getAllMyFeeds(page: $startIndex, limit: $perPage) {
      feed
      parentId
      feedImage
      updatedAt
      createdAt
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

export const GET_ALL_COMMENTS = gql`
  query getAllComments($feedId: String) {
    getAllFeeds(feedId: $feedId) {
      feed
      parentId
      feedImage
      updatedAt
      createdAt
      likes
      feedId
      user {
        userId
        fullName
        profileImage
      }
    }
  }
`;

export const VIEW_SAVED_FEED = gql`
  query viewSavedFeeds {
    viewSavedFeeds {
      archiveId
      feedId
      userId
      feed {
        feed
        parentId
        feedImage
        updatedAt
        createdAt
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
      createdAt
    }
  }
`;
