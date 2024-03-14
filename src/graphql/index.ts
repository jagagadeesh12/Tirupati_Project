import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';

import {GRAPHQL_END_POINT} from '../utils/urls';
import {refreshToken} from '../data';

const createApolloClient = async (authToken: string, logout: () => void) => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_END_POINT,
  });

  const authLink = setContext(async (_, {headers}) => {
    return {
      headers: {
        ...headers,
        Authorization: authToken ? `Bearer ${authToken}` : '', // Include the token in the Authorization header
      },
    };
  });
  // errorLink
  const errorLink = onError(
    ({graphQLErrors, networkError, operation, forward}) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            // Apollo Server sets code to UNAUTHENTICATED
            // when an AuthenticationError is thrown in a resolver
            case 'UNAUTHENTICATED':
              // Modify the operation context with a new token
              const oldHeaders = operation.getContext().headers;
              const token = refreshToken();
              if (!token) {
                logout();
              }
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${token}`,
                },
              });
              // Retry the request, returning the new observable
              return forward(operation);
          }
        }
      }

      // To retry on network errors, we recommend the RetryLink
      // instead of the onError link. This just logs the error.
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    },
  );
  console.log('authToken', authToken);
  return new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
