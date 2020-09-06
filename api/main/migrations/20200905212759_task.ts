exports.up = (knex) => knex.schema.createTable('task', (table) => {
  table.increments('id').primary();
  table.string('title').notNull();
  table.string('description').notNull();
  table.enum('status', ['pending', 'in-progress', 'done']).notNull().defaultTo('pending');
});

exports.down = (knex) => knex.schema.dropTable('task');
