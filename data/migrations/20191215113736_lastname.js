exports.up = async knex => {
  await knex.schema.createTable('lastname', tbl => {
    tbl
      .increments('id')
      .unsigned()
      .primary();
    tbl.string('lastname').notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('lastname');
};
