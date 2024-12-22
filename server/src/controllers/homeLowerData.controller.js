const router = require("express").Router();

const homeLowerData = require("../models/homeLowerData.model");
const {getAll} = require("../controllers/crud.controller");

router.get('/', getAll(homeLowerData));

module.exports = router;