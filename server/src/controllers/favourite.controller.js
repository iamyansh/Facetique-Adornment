const express = require('express');
const { authorization } = require('../middlewares/authorization');
const { checkDuplicateFavourite } = require('../middlewares/checkDuplicateFavourite');
const { postFavourite, getFavourites, deleteOne } = require('./crud.controller');
const Favourite = require('../models/favourite.modal');
const router = express.Router();


router.post('/',authorization,checkDuplicateFavourite,postFavourite(Favourite));

router.get('/',authorization, getFavourites(Favourite));

router.delete('/:id', deleteOne(Favourite));


module.exports = router;