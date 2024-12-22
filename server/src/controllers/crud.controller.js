
const post = (model) => async (req,res) => {

    try {
        const item = await model.create(req.body);

        return res.status(201).send(item);

    } catch (e) {
        
        return res.status(500).json({status: 'Failed', message: e.message});
    }
};


const postFavourite = (model) => async (req,res) => {

    try {
        const item = await model.create({...req.body, user: req.user._id});

        return res.status(201).send(item);

    } catch (e) {

        return res.status(500).json({status: 'Failed', message: e.message});
    }
};

const getAll = (model) => async (req,res) => {
    
    try {
        const item = await model.find().lean();

        return res.status(201).send(item);

    } catch (e) {
        
        return res.status(500).json({status: 'Failed', message: e.message});
    }
};


const getFavourites = (model) => async (req,res) => {
    
    try {
        const item = await model.find({user: req.user._id}).lean();
        
        return res.status(201).send(item);

    } catch (e) {

        return res.status(500).json({status: 'Failed', message: e.message});
    }
};

const deleteOne = (model) => async (req,res) => {
    
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean();

        return res.status(201).json(item);

    } catch (e) {

        return res.status(500).json({status: 'Failed', message: e.message});
    }
};


module.exports = {
    post,
    getAll,
    postFavourite,
    getFavourites,
    deleteOne
};