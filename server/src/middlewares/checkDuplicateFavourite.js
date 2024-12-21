const Favourite = require("../models/favourite.modal");


const checkDuplicateFavourite = async(req,res,next) => {
    
    try {
        const match = await Favourite.countDocuments({title: req.body.title, user: req.user._id});

        if(match){
            return res.status(400).json({status: 'Failed', message: 'Already present in the favourite'});
        }
    
        next();
        
    } catch (e) {

        return res.status(500).json({status: 'Failed', message: e.message});
    }

}

module.exports = {checkDuplicateFavourite};