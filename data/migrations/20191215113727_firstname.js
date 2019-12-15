exports.up = async knex => {
  await knex.schema.createTable('firstname', tbl => {
    tbl
      .increments('id')
      .unsigned()
      .primary();
    tbl.string('firstname').notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('firstname');
};
