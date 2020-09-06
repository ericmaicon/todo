import { Repository } from '@api/domain';
import { TaskRepository } from '@api/data';

export default class TaskRepositoryAdapter extends Repository {
  private readonly taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    super();
    this.taskRepository = taskRepository;
  }

  list(): Promise<object[]> {
    return this.taskRepository.list();
  }

  update(id: number, data: object): Promise<void> {
    return this.taskRepository.update(id, data);
  }

  insert(data: object): Promise<void> {
    return this.taskRepository.insert(data);
  }
}
