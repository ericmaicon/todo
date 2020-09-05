export interface Repository<T> {
  list(): Promise<T[]>;
  update(id: number, data: T): Promise<void>;
  insert(data: T): Promise<void>;
}
