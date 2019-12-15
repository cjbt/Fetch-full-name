exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('middleName')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('middleName').insert({ middleName: 'Smith' });
    });
};
