const router = require("express").Router();

const homeUpperData = require("../models/homeUpperData.model");
const {getAll} = require("../controllers/crud.controller");

router.get('/', getAll(homeUpperData));

module.exports = router;