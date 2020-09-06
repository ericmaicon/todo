export abstract class Repository {
  abstract list(): Promise<object[]>;

  abstract update(id: number, data: object): Promise<void>;

  abstract insert(data: object): Promise<void>;
}
