export abstract class GraphqlClient {
  abstract query(query: string): Promise<object>;

  abstract mutate(query: string, variables: object): Promise<object|void>;
}
