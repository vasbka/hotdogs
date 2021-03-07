const {isNameExists} = require("../controllers/hotdogs.controller");
const cors = require('cors');
const config = require('config');
const {create, findAll, update, remove} = require("../controllers/hotdogs.controller.js");

module.exports = app => {
    let router = require("express").Router();

    let corsOptions = {
        origin: config.get('clientHost'),
        optionsSuccessStatus: 200
    }

    router.post("/", cors(corsOptions), create);
    router.get("/", cors(corsOptions), findAll);
    router.post("/check-name", cors(corsOptions), isNameExists);
    router.put("/:id", cors(corsOptions), update);
    router.delete("/:id", cors(corsOptions), remove);

    app.use('/api/hot-dogs', router);
};