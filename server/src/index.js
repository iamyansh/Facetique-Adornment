const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const {signup, login} = require('./controllers/auth.controller');
const favouriteController = require('./controllers/favourite.controller');
const paymentController = require('./controllers/payment.controller');
const orderController = require('./controllers/order.controller');
const homeUpperDataController = require('./controllers/homeUpperData.controller');
const homeLowerDataController = require('./controllers/homeLowerData.controller');
const allProductsDataController = require('./controllers/allProductsData.controller');
const braceletDataController = require('./controllers/braceletData.controller');
const earingDataController = require('./controllers/earingData.controller');
const chainDataController = require('./controllers/chainData.controller');


app.post('/signup', signup);
app.post('/login', login);


// Razorpay Payment
app.use('/api/payment',paymentController);



app.use('/homeUpperData', homeUpperDataController);
app.use('/homeLowerData', homeLowerDataController);
app.use('/allProducts', allProductsDataController);
app.use('/chain', chainDataController);
app.use('/bracelet', braceletDataController);
app.use('/earing', earingDataController);

app.use('/favourite',favouriteController);
app.use('/order', orderController);

module.exports = app;