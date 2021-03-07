/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('hotdogs', {
        id: 'id',
        price: {type: 'double', notNull: true},
        name: { type: 'varchar(1000)', notNull: true },
        description: {type:'text', notNull: true},
        imageLink: { type: 'varchar(1000)'},
    })
}
exports.down = pgm => {};
