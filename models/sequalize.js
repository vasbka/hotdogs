const Sequalize = require('sequelize');
const sequalize = new Sequalize('postgres://rmbqbumc:uQW3Vldf4Q0ELdoTfEXi4ULsNUdAqw4N@isilo.db.elephantsql.com:5432/rmbqbumc')

const db = {};

db.sequalize = sequalize;
db.hotdogs = require("./hotdog.js")(sequalize, Sequalize);

module.exports = db;