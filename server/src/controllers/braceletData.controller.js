const router = require("express").Router();

const braceletData = require("../models/braceletData.model");
const {getAll} = require("../controllers/crud.controller");

router.get('/', getAll(braceletData));

module.exports = router;