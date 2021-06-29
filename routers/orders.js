const express = require('express');
const {userById, addProductsToUserHistory} = require('./../middlewares/user');
const {orderById} = require('./../middlewares/order');
const {create, listOrders, getStatus, updateOrderStatus} = require('./../controllers/orderController');
const {requireSignIn, isAuth, isAdmin} = require('./../middlewares/auth');
const {decreaseQuantity} = require('./../middlewares/product');
const router = express.Router();

router.get('/:userId',[requireSignIn, isAuth, isAdmin], listOrders)
router.get('/status/:userId',[requireSignIn, isAuth, isAdmin], getStatus)

router.patch('/:orderId/status/:userId',[requireSignIn, isAuth, isAdmin], updateOrderStatus)
router.param('orderId', orderById)

router.post('/create/:userId', [requireSignIn, isAuth, addProductsToUserHistory, decreaseQuantity] , create)
router.param('userId', userById)


module.exports = router