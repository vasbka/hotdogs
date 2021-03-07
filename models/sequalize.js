const Sequalize = require('sequelize');
const config = require('config');

const sequalize = new Sequalize(config.get('db'));

const db = {};

db.sequalize = sequalize;
db.hotdogs = require("./hotdog.js")(sequalize, Sequalize);

module.exports = db;