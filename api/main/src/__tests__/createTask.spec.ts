import request from 'supertest';
import { app } from '../server/server';
import DatabaseFactory from '../factory/DatabaseFactory';

const CREATE_TASK = `
mutation CreateTask(
  $title: String,
  $description: String
) {
    createTask(title: $title, description: $description)
}
`;

describe('createTask', () => {
  afterAll(async () => {
    const connection = await DatabaseFactory.get();
    await connection('task').delete();
  });

  it('should return an error if the title is invalid', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({
        query: CREATE_TASK,
        variables: {
          title: '',
        },
      })
      .then((response) => {
        const [error] = response.body.errors;
        expect(error.message).toBe('Invalid title.');
        done();
      });
  });

  it('should return an error if the description is invalid', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({
        query: CREATE_TASK,
        variables: {
          title: 'task 1',
          description: '',
        },
      })
      .then((response) => {
        const [error] = response.body.errors;
        expect(error.message).toBe('Invalid description.');
        done();
      });
  });

  it('should create a task', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'applicatisn/json')
      .send({
        query: CREATE_TASK,
        variables: {
          title: 'task 1',
          description: 'description',
        },
      })
      .expect(200, {
        data: {
          createTask: true,
        },
      })
      .end(done);
  });
});
