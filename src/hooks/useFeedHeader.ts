import {IFeedViewHeader} from '../types';
import {useQuery} from '@apollo/client';
import {FETCH_USER_OF_POST} from '../graphql/user';

const useFeedHeader = ({userId, time}: IFeedViewHeader) => {
  const {} = useQuery(FETCH_USER_OF_POST, {
    variables: {},
  });
  return {};
};

export default useFeedHeader;
