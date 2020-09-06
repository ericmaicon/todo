import TaskRepository from '../TaskRepository';
import { GraphqlClient } from '../../protocol';
import { CREATE_TASK, UPDATE_STATUS_TASK } from '../../query/TaskQuery';

const taskList = [
  {
    id: 1,
    title: 'title',
    description: 'description',
    status: 'done',
  },
  {
    id: 1,
    title: 'title',
    description: 'description',
    status: 'done',
  },
];

class GraphqlClientStub implements GraphqlClient {
  query(query: string): Promise<object> {
    return Promise.resolve(taskList);
  }

  mutation(query: string, variables: object): Promise<object|void> {
    return Promise.resolve();
  }
}

describe('TaskRepository', () => {
  test('should return the task list', async () => {
    const graphqlClient = new GraphqlClientStub();
    const repository = new TaskRepository(graphqlClient);
    const list = await repository.getTasks();
    expect(list).toEqual(taskList);
  });

  test('should create a task', async () => {
    const graphqlClient = new GraphqlClientStub();
    const repository = new TaskRepository(graphqlClient);
    const insertData = {
      title: 'title',
      description: 'description',
    };

    const mutationSpy = jest.spyOn(graphqlClient, 'mutation');
    await repository.createTask(insertData);
    expect(mutationSpy).toBeCalledWith(CREATE_TASK, insertData);
  });

  test('should update a task', async () => {
    const graphqlClient = new GraphqlClientStub();
    const repository = new TaskRepository(graphqlClient);
    const updateData = {
      status: 'in-progress',
    };

    const mutationSpy = jest.spyOn(graphqlClient, 'mutation');
    await repository.updateStatusTask(1, updateData);
    expect(mutationSpy).toBeCalledWith(UPDATE_STATUS_TASK, { id: 1, ...updateData });
  });
});
