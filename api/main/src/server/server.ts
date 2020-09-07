import express, { json } from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { resolver } from './resolver';
import { schema } from './schema';

export const app = express();
app.use(cors());
app.use('/graphql', json(), graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true,
}));
