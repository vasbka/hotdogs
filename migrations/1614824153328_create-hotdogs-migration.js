/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('hotdogs', {
        id: 'id',
        price: 'integer',
        name: { type: 'varchar(1000)', notNull: true },
        description: 'text',
        sku: { type: 'varchar(1000)', notNull: true },
    })
}
exports.down = pgm => {};
