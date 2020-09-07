import { ApolloClient, InMemoryCache } from '@apollo/client';

export default class Apollo {
  private client: ApolloClient<any>;

  connect(uri: string):void {
    this.client = new ApolloClient({
      uri,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    });
  }

  connection() {
    return this.client;
  }
}
