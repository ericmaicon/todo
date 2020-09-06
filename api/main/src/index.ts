import { app } from './server/server';

require('dotenv').config();

app.listen(4000, () => console.log('Running a GraphQL API server at http://0.0.0.0:4000/graphql'));
