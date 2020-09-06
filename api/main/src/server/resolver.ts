import { Task } from '@api/domain';
import TaskFactory from '../factory/TaskFactory';
import { DatabaseAdapter } from '../adapter';

interface CreateTaskParam {
  title: string;
  description: string;
}

interface UpdateStatusTaskParam {
  id: number;
  status: string;
}

const databaseAdapter = new DatabaseAdapter();

export const resolver = {
  async getTasks():Promise<object[]> {
    const taskDomain = await TaskFactory(databaseAdapter);
    return taskDomain.list();
  },
  async createTask({ title, description }: CreateTaskParam):Promise<boolean> {
    const taskDomain = await TaskFactory(databaseAdapter);
    await taskDomain.create({ title, description } as Task);
    return true;
  },
  async updateStatusTask({ id, status }:UpdateStatusTaskParam):Promise<boolean> {
    const taskDomain = await TaskFactory(databaseAdapter);
    await taskDomain.update(id, status);
    return true;
  },
};
