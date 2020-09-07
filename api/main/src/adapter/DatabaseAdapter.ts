import { Database } from '@api/data';
import DatabaseFactory from '../factory/DatabaseFactory';

export default class DatabaseAdapter implements Database {
  async list(table: string): Promise<object[]> {
    const connection = await DatabaseFactory.get();
    return connection(table);
  }

  async update(table: string, id: number, data: object): Promise<void> {
    const connection = await DatabaseFactory.get();
    await connection(table)
      .where('id', id)
      .update(data);
  }

  async insert(table: string, data: object): Promise<void> {
    const connection = await DatabaseFactory.get();
    await connection(table).insert(data);
  }
}
