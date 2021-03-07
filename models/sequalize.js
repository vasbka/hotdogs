const Sequalize = require('sequelize');

const sequalize = new Sequalize(process.env.DB_URL);

const db = {};

db.sequalize = sequalize;
db.hotdogs = require("./hotdog.js")(sequalize, Sequalize);

module.exports = db;