import {ApolloClient, InMemoryCache} from '@apollo/client';
import {GRAPHQL_END_POINT} from '../../utils/urls';

const client = new ApolloClient({
  uri: GRAPHQL_END_POINT,
  cache: new InMemoryCache(),
});

export default client;
