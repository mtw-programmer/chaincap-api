import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { importSchema } from 'graphql-import';

import { httpServer } from './app';
import Stock from '../models/Stock';
import StockInterface from '../interfaces/Stock';

const fetchStocks = async ():Promise<StockInterface[]> => {
  return await Stock.find();
};

const resolvers = {
  Query: {
    stocks: () => fetchStocks(),
  },
};

const typeDefs = importSchema('./typedefs/stock.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

export { server };
