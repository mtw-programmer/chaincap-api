import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { importSchema } from 'graphql-import';

import { httpServer } from './app';

const stocks = [
  {
    img: 'test.png',
    title: 'Oil',
    buyPrice: 0.5378236,
    sellPrice: 0.5378345,
    priceDiff: -0.22,
    favourite: false
  },
];

const resolvers = {
  Query: {
    stocks: () => stocks,
  },
};

const typeDefs = importSchema('./typedefs/stock.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

export { server };
