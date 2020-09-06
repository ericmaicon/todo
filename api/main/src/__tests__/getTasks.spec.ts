import request from 'supertest';
import { app } from '../server/server';
import { DatabaseAdapter } from '../adapter';
import DatabaseFactory from '../factory/DatabaseFactory';

const GET_TASKS = `
{
  getTasks {
      title
      description
  }
}
`;

const expectedItem = [
  {
    title: 'task 1',
    description: 'description',
  },
];

describe('getTasks', () => {
  beforeAll(async () => {
    const connection = await DatabaseFactory.get();
    await connection('task').delete();
    await connection('task').insert(expectedItem);
  });

  afterAll(async () => {
    const connection = await DatabaseFactory.get();
    await connection('task').delete();
  });

  it('should return all tasks', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({ query: GET_TASKS })
      .expect(200, {
        data: {
          getTasks: expectedItem,
        },
      })
      .end(done);
  });
});
