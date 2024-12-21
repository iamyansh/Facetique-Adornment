
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_KEY)
}


const authorization = async (req, res, next) => {

    try {
        const bearerToken = req?.headers?.authorization;
    
        if(!bearerToken || !bearerToken.startsWith('Bearer ')){
            return res.status(400).json({status: 'Failed', message: 'Please provide a valid token'});
        }
        
        const token = bearerToken.split(' ')[1];
        
        let user;
        
        try {
            user = await verifyToken(token);
        } catch (e) {
            return res.status(400).json({status: 'Failed', message: 'Please provide a valid token'});
        }
        
        req.user = user.user;
        
        return next();
        
        
    } catch (e) {
        
        return res.status(500).json({status: 'Failed', message: e.message});
    }
}


module.exports = {authorization};