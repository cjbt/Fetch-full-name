exports.up = async knex => {
  await knex.schema.createTable('middlename', tbl => {
    tbl
      .increments('id')
      .unsigned()
      .primary();
    tbl.string('middlename').notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('middlename');
};
