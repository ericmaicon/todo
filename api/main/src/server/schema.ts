import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Mutation {
  createTask(title: String, description: String): Boolean
  updateStatusTask(id: ID, status: String): Boolean
}

type Query {
  getTasks: [Task]
}

type Task {
  id: ID!
  title: String
  description: String
  status: String
}
`);
