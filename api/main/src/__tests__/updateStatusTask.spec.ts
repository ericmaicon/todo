import request from 'supertest';
import { app } from '../server/server';
import DatabaseFactory from '../factory/DatabaseFactory';

const UPDATE_STATUS_TASK = `
mutation UpdateStatusTask(
  $id: ID,
  $status: String
) {
    updateStatusTask(id: $id, status: $status)
}
`;

const existentTask = {
  id: 1,
  title: 'task 1',
  description: 'description',
};

describe('updateStatusTask', () => {
  beforeAll(async () => {
    const connection = await DatabaseFactory.get();
    await connection('task').delete();
    await connection('task').insert(existentTask);
  });

  afterAll(async () => {
    const connection = await DatabaseFactory.get();
    await connection('task').delete();
  });

  it('should return an error if the status is invalid', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({
        query: UPDATE_STATUS_TASK,
        variables: {
          id: 1,
          status: 'invalid',
        },
      })
      .then((response) => {
        const [error] = response.body.errors;
        expect(error.message).toBe('Invalid status.');
        done();
      });
  });

  it('should update the status', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({
        query: UPDATE_STATUS_TASK,
        variables: {
          id: 1,
          status: 'in-progress',
        },
      })
      .expect(200, {
        data: {
          updateStatusTask: true,
        },
      })
      .end(done);
  });
});
