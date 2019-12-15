exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('lastName')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('lastName').insert({ lastName: 'Doe' });
    });
};
