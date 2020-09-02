/* eslint react/prop-types: 0, react/destructuring-assignment: 0, react/jsx-props-no-spreading: 0 */
import withApolloLib from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';

const runWithApollo = withApolloLib(
  ({ initialState, ctx }) => {
    const config = {
      uri: ctx ? process.env.GRAPH_ENDPOINT : '/api/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
    };

    return new ApolloClient(config);
  },
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    ),
  },
);

export const withApollo = (Component, options = {}) => runWithApollo(
  Component,
  {
    ...(options.ssr !== false ? { getDataFromTree } : {}),
  },
);
