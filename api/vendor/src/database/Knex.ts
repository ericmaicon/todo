import knex from 'knex';
import 'mysql2';

export default class Knex {
  private client: knex;

  connect(host: string, user: string, password: string, database: string):void {
    this.client = knex({
      client: 'mysql2',
      connection: {
        host,
        user,
        password,
        database,
      },
    });
  }

  connection() {
    return this.client;
  }
}
