const express = require('express')
const {userById} = require('./../middlewares/user')
const router = express.Router()
const {generateToken, processPayment} = require('./../controllers/braintreeController')
const {requireSignIn, isAuth} = require('./../middlewares/auth')

router.get('/getToken/:userId', [requireSignIn, isAuth], generateToken)
router.post('/purchase/:userId', [requireSignIn, isAuth], processPayment)
router.param('userId', userById )

module.exports = router