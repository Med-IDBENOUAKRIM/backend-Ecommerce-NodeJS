const express = require('express')
const router = express.Router()

const { signUp, signIn, signOut } = require('../controllers/authController')
const { userSignUpValidator } = require('../middlewares/userValidator')

const { requireSignIn } = require('../middlewares/auth')

router.post('/signup', userSignUpValidator , signUp)
router.post('/signin', signIn)
router.get('/signout', signOut)

router.get('/hello', requireSignIn, (req, res)=>{
    res.send('Salam hnak')
})

module.exports = router;