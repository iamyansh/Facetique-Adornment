const router = require("express").Router();

const earingData = require("../models/earingData.model");
const {getAll} = require("../controllers/crud.controller");

router.get('/', getAll(earingData));

module.exports = router;