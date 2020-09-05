import { Repository } from './protocol';
import { Task } from './model';
import { Validator } from '../protocol';
import { STATUSES } from '../constant/Statuses';

export default class TaskDomain {
  private readonly repository: Repository<Task>;

  private readonly validator: Validator;

  constructor(repository: Repository<Task>, validator: Validator) {
    this.repository = repository;
    this.validator = validator;
  }

  list(): Promise<Task[]> {
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
    } as Task);
  }
}
