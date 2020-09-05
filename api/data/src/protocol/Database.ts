export interface Database<T> {
  list(): Promise<T[]>;
  update(id: number, data: T): Promise<void>;
  insert(data: T): Promise<void>;
}
