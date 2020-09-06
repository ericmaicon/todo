export abstract class Repository {
  abstract getTasks ():Promise<object>;

  abstract createTask(params: object):Promise<void>;

  abstract updateStatusTask (id: number, params: object):Promise<void>;
}
