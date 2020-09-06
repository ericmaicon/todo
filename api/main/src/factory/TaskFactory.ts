import { Repository, TaskDomain } from '@api/domain';
import { TaskRepository } from '@api/data';
import { DatabaseAdapter, ValidatorAdapter } from '../adapter';
import TaskRepositoryAdapter from '../domain/TaskRepositoryAdapter';

export default async (databaseAdapter:DatabaseAdapter) => {
  const taskRepository = new TaskRepository(databaseAdapter);
  const adapter = new TaskRepositoryAdapter(taskRepository);
  const validatorAdapter = new ValidatorAdapter();
  return new TaskDomain(adapter, validatorAdapter);
};
