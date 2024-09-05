const express = require('express');

const authMiddleware = require('../middleware/auth');

const {addToCart, removeFromCart,getCart} = require('../controllers/cartController');

const cartRoute = express.Router();

cartRoute.post('/add',authMiddleware,  addToCart);
cartRoute.post('/remove',authMiddleware, removeFromCart);
cartRoute.post('/get',authMiddleware, getCart);

module.exports =  cartRoute;


