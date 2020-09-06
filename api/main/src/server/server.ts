import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolver } from './resolver';
import { schema } from './schema';

export const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true,
}));
