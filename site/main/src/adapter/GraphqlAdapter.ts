import { GraphqlClient } from '@site/data';
import { gql } from '@apollo/client';
import GraphqlFactory from '../factory/GraphqlFactory';

export default class GraphqlAdapter implements GraphqlClient {
  async query(query: string): Promise<object> {
    const connection = await GraphqlFactory.get();
    const tempQuery = gql(query);
    return connection.query({ query: tempQuery, refetch: true });
  }

  async mutate(query: string, variables: object): Promise<object|void> {
    const connection = await GraphqlFactory.get();
    const tempQuery = gql(query);
    return connection.mutate({ mutation: tempQuery, variables });
  }
}
