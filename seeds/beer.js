exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    // return knex('beer').del()
    return knex.raw('TRUNCATE beer; ALTER SEQUENCE beer_id_seq restart with 1;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('beer').insert({
                    date: '12/13/2016',
                    name: '90 shilling',
                    style: 'amber',
                    method: 'bottle',
                    abv: '5.3',
                    niceLabel: true,
                    slammability: '5',
                    brewery: 'odell',
                    location: 'ft collins',
                    myRating: '8',
                    thoughts: 'delicious. one of the most unique ambers ive had.'
                })
            ]);
        });
};
