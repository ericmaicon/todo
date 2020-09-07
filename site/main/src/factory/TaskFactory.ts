import { TaskDomain, Task } from '@site/domain';
import data from '@site/data';
import { GraphqlAdapter, ValidatorAdapter } from '../adapter';

const { TaskRepository } = data;

function factory() {
  const graphlClient = new GraphqlAdapter();
  const repository = new TaskRepository(graphlClient);
  const validatorAdapter = new ValidatorAdapter();
  return new TaskDomain(repository, validatorAdapter);
}

export default {

  async getTasks() {
    const domain = factory();
    const tasks = await domain.getTasks();
    return tasks;
  },

  async createTask(task: object) {
    const domain = factory();
    await domain.createTask(task as Task);
    return true;
  },

  async updateStatusTask({ id, status }) {
    const domain = factory();
    await domain.updateStatusTask(id, status);
    return true;
  },
};
