const router = require("express").Router();

const allProductsData = require("../models/allProductsData.model");
const {getAll} = require("../controllers/crud.controller");

router.get('/', getAll(allProductsData));

module.exports = router;