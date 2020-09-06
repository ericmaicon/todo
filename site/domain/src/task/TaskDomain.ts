import Task from '../model/Task';
import { Validator, Repository } from '../protocol';
import { STATUSES } from '../constant/Statuses';

export interface TaskResponse {
  data: {
    getTasks: []
  }
}

export default class TaskDomain {
  private readonly repository: Repository;

  private readonly validator: Validator;

  constructor(repository: Repository, validator: Validator) {
    this.repository = repository;
    this.validator = validator;
  }

  async getTasks(): Promise<object> {
    const { data } = await this.repository.getTasks() as TaskResponse;
    return data?.getTasks;
  }

  async createTask(data: Task): Promise<void> {
    if (this.validator.isEmpty(data.title)) {
      throw new Error('Invalid title.');
    }

    if (this.validator.isEmpty(data.description)) {
      throw new Error('Invalid description.');
    }

    await this.repository.createTask(data);
  }

  async updateStatusTask(id: number, status: string): Promise<void> {
    if (this.validator.notIn(status, [STATUSES.IN_PROGRESS, STATUSES.DONE])) {
      throw new Error('Invalid status.');
    }

    await this.repository.updateStatusTask(id, {
      status,
    });
  }
}
