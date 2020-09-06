import { GraphqlClient } from '../protocol';
import { GET_TASKS, CREATE_TASK, UPDATE_STATUS_TASK } from '../query/TaskQuery';

export default class TaskRepository {
  private readonly graphqlClient: GraphqlClient;

  constructor(graphqlClient: GraphqlClient) {
    this.graphqlClient = graphqlClient;
  }

  getTasks():Promise<object> {
    return this.graphqlClient.query(GET_TASKS);
  }

  async createTask(params: object):Promise<void> {
    await this.graphqlClient.mutation(CREATE_TASK, params);
  }

  async updateStatusTask(id: number, params: object):Promise<void> {
    await this.graphqlClient.mutation(UPDATE_STATUS_TASK, {
      id,
      ...params,
    });
  }
}
