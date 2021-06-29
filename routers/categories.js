const express = require('express')
const { model } = require('mongoose')
const router = express.Router()

const { 
        showAllCategories,
        createCategory, 
        showCategory, 
        categoryById,
        updateCategory,
        removeCategory
    } = require('../controllers/categoryController')

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')
const { userById } = require('../middlewares/user')

router.get('/', showAllCategories)

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin] , createCategory)
router.param('userId', userById)

router.get('/:categoryId', showCategory)
router.param('categoryId', categoryById)

router.put('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin] , updateCategory)

router.delete('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin] , removeCategory)

module.exports = router