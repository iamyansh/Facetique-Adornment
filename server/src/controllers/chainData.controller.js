const router = require("express").Router()

const chainData = require("../models/chainData.model");
const {getAll} = require("./crud.controller")

router.get('/', getAll(chainData));

module.exports = router;