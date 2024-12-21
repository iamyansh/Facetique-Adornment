const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const {signup, login} = require('./controllers/auth.controller');
const favouriteController = require('./controllers/favourite.controller');
const paymentController = require('./controllers/payment.controller');
const orderController = require('./controllers/order.controller');

app.post('/signup', signup);
app.post('/login', login);


// Razorpay Payment
app.use('/api/payment',paymentController);

app.use('/favourite',favouriteController);
app.use('/order', orderController);

module.exports = app;