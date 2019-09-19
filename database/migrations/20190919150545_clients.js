exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', tbl => {
    tbl.increments();

    tbl.string('username', 255).notNullable().unique();
    tbl.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  // undo the operation in up
  return knex.schema.dropTableIfExists('clients');
};
