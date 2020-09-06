import Task from '../model/Task';
import { Validator, Repository } from '../protocol';
import { STATUSES } from '../constant/Statuses';

export default class TaskDomain {
  private readonly repository: Repository;

  private readonly validator: Validator;

  constructor(repository: Repository, validator: Validator) {
    this.repository = repository;
    this.validator = validator;
  }

  list(): Promise<object[]> {
    return this.repository.list();
  }

  create(data: Task): Promise<void> {
    if (this.validator.isEmpty(data.title)) {
      throw new Error('Invalid title.');
    }

    if (this.validator.isEmpty(data.description)) {
      throw new Error('Invalid description.');
    }

    return this.repository.insert(data);
  }

  update(id: number, status: string): Promise<void> {
    if (this.validator.notIn(status, [STATUSES.IN_PROGRESS, STATUSES.DONE])) {
      throw new Error('Invalid status.');
    }

    return this.repository.update(id, {
      status,
    });
  }
}
