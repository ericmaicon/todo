import { Apollo } from '@site/vendor';

export default class GraphqlFactory {
  private static apollo: Apollo;

  static async connect(): Promise<void> {
    const url = process.env.API_URL || '';

    this.apollo = new Apollo();
    this.apollo.connect(url);
  }

  static async get():Promise<any> {
    if (!this.apollo) {
      await this.connect();
    }

    return this.apollo.connection();
  }
}
