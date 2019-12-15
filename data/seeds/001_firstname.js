exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('firstName')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('firstName').insert({ firstName: 'Jane' });
    });
};
