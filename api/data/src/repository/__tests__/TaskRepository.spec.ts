import TaskRepository from '../TaskRepository';
import { Database } from '../../protocol';

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

class DatabaseStub implements Database {
  async list(table: string): Promise<object[]> {
    return Promise.resolve(taskList);
  }

  update(table: string, id: number, data: object): Promise<void> {
    return Promise.resolve();
  }

  insert(table: string, data: object): Promise<void> {
    return Promise.resolve();
  }
}

describe('TaskRepository', () => {
  test('should return the task list', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const list = await repository.list();
    expect(list).toEqual(taskList);
  });

  test('should update a task', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const updateData = {
      status: 'in-progress',
    };

    const updateSpy = jest.spyOn(database, 'update');
    await repository.update(1, updateData);
    expect(updateSpy).toBeCalledWith('task', 1, updateData);
  });

  test('should insert a task', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const insertData = {
      title: 'title',
      description: 'description',
      status: 'done',
    };

    const insertSpy = jest.spyOn(database, 'insert');
    await repository.insert(insertData);
    expect(insertSpy).toBeCalledWith('task', insertData);
  });
});
