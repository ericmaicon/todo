import { Database } from '../protocol';
import { Task } from '../model';

export default class TaskRepository {
  private readonly database: Database<Task>;

  constructor(database: Database<Task>) {
    this.database = database;
  }

  list():Promise<Task[]> {
    return this.database.list();
  }

  insert(params: Task):Promise<void> {
    return this.database.insert(params);
  }

  update(id: number, params: Task):Promise<void> {
    return this.database.update(id, params);
  }
}
