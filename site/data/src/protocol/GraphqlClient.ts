export abstract class GraphqlClient {
  abstract query(query: string): Promise<object>;

  abstract mutation(query: string, variables: object): Promise<object|void>;
}
