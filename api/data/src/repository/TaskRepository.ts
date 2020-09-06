import { Database } from '../protocol';

export default class TaskRepository {
  private readonly database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  list():Promise<object[]> {
    return this.database.list('task');
  }

  insert(params: object):Promise<void> {
    return this.database.insert('task', params);
  }

  update(id: number, params: object):Promise<void> {
    return this.database.update('task', id, params);
  }
}
