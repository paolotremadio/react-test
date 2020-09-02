import { ApolloServer, gql } from 'apollo-server-micro';

const dataset = {
  value: 'test',
};

const typeDefs = gql`
  type Dataset {
    value: String!
  }
  type Query {
    dataset: Dataset
  }
  type Mutation {
    updateDataset(value: String!): Dataset
  }
`;

const resolvers = {
  Query: {
    dataset: () => dataset,
  },

  Mutation: {
    updateDataset: (root, { value }) => {
      dataset.value = value;
      return dataset;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
