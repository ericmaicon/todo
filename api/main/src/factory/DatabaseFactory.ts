import knex from 'knex';
import { Knex } from '@api/vendor';

export default class DatabaseFactory {
  private static knex: Knex;

  static async connect(): Promise<void> {
    const host = process.env.DB_HOST || '';
    const dbname = process.env.DB_NAME || '';
    const username = process.env.DB_USERNAME || '';
    const password = process.env.DB_PASSWORD || '';

    this.knex = new Knex();
    await this.knex.connect(host, username, password, dbname);
  }

  static async get():Promise<knex> {
    if (!this.knex) {
      await this.connect();
    }

    return this.knex.connection();
  }
}
