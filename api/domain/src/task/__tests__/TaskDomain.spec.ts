import TaskDomain from '../TaskDomain';
import { Repository, Validator } from '../../protocol';
import Task from '../../model/Task';
import { STATUSES } from '../../constant/Statuses';

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

class RepositoryStub implements Repository {
  list(): Promise<object[]> {
    return Promise.resolve(taskList);
  }

  update(id: number, data: object): Promise<void> {
    return Promise.resolve();
  }

  insert(data: object): Promise<void> {
    return Promise.resolve();
  }
}

class ValidatorStub implements Validator {
  isEmpty(field: string): boolean {
    return false;
  }

  notIn(field: string, items:string[]): boolean {
    return false;
  }
}

describe('TaskDomain', () => {
  test('should return the task list', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    const list = await domain.list();
    expect(list).toEqual(taskList);
  });

  test('should throw an error if the name is empty', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    const insertData = {
      title: 'title',
      description: 'description',
    } as Task;

    jest.spyOn(validator, 'isEmpty').mockReturnValueOnce(true);
    try {
      domain.create(insertData);
    } catch (error) {
      expect(error.message).toBe('Invalid title.');
    }
  });

  test('should throw an error if the description is empty', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    const insertData = {
      title: 'title',
      description: 'description',
    } as Task;

    jest.spyOn(validator, 'isEmpty').mockImplementation((field: string) => field === 'description');
    try {
      domain.create(insertData);
    } catch (error) {
      expect(error.message).toBe('Invalid description.');
    }
  });

  test('should create if everything is fine', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    const insertData = {
      title: 'title',
      description: 'description',
    } as Task;

    const insertSpy = jest.spyOn(repository, 'insert');
    await domain.create(insertData);
    expect(insertSpy).toBeCalledWith(insertData);
  });

  test('should throw an error if the update status is not valid', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    jest.spyOn(validator, 'notIn').mockReturnValueOnce(true);

    try {
      domain.update(1, 'status');
    } catch (error) {
      expect(error.message).toBe('Invalid status.');
    }
  });

  test('should update the status if everything is fine', async () => {
    const repository = new RepositoryStub();
    const validator = new ValidatorStub();
    const domain = new TaskDomain(repository, validator);
    const updateSpy = jest.spyOn(repository, 'update');
    await domain.update(1, STATUSES.IN_PROGRESS);
    expect(updateSpy).toBeCalledWith(1, {
      status: STATUSES.IN_PROGRESS,
    });
  });
});
