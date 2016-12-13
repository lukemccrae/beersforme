// inside brewery seed file
exports.up = function(knex, Promise) {
    // return knex.raw('TRUNCATE brewery RESTART IDENTITY CASCADE;')
    //     .then(() => {
    return knex.schema.createTable('beer', function(table) { //this creates the database in the format below
            table.increments(); //this equates to id with type serial
            table.string('date').notNullable();
            table.string('name');
            table.string('style');
            table.string('method');
            table.string('abv');
            table.boolean('niceLabel');
            table.string('slammability');
            table.string('brewery');
            table.string('location');
            table.string('myRating');
            table.string('thoughts');
        })
        // insert breweries with primary key IDs
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('beer');
};
