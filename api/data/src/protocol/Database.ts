export abstract class Database {
  abstract list(table: string): Promise<object[]>;

  abstract update(table: string, id: number, data: object): Promise<void>;

  abstract insert(table: string, data: object): Promise<void>;
}
