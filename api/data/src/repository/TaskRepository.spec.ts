import TaskRepository from './TaskRepository';
import { Database } from '../protocol';
import { Task } from '../model';

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

class DatabaseStub implements Database<Task> {
  async list(): Promise<Task[]> {
    return Promise.resolve(taskList);
  }

  async update(id: number, data: Task): Promise<void> {
    return Promise.resolve();
  }

  async insert(data: Task): Promise<void> {
    return Promise.resolve();
  }
}

describe('TaskRepository', () => {
  test('list tasks', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const list = await repository.list();
    expect(list).toEqual(taskList);
  });

  test('update a task', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const updateData = {
      status: 'in-progress',
    };

    const updateSpy = jest.spyOn(database, 'update');
    await repository.update(1, updateData);
    expect(updateSpy).toBeCalledWith(1, updateData);
  });

  test('insert a task', async () => {
    const database = new DatabaseStub();
    const repository = new TaskRepository(database);
    const insertData = {
      title: 'title',
      description: 'description',
      status: 'done',
    };

    const insertSpy = jest.spyOn(database, 'insert');
    await repository.insert(insertData);
    expect(insertSpy).toBeCalledWith(insertData);
  });
});
