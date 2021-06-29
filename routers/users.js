const express = require('express')
const router = express.Router()

const { getOneUsr } = require('../controllers/userController')
const { userById } = require('../middlewares/user')

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')

router.get('/profile/:userId', [requireSignIn, isAuth, isAdmin], getOneUsr)
router.param('userId', userById)

module.exports = router