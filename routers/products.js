const express = require('express')
const router = express.Router()

const {
    allProduct,
    createProduct, 
    productById, 
    showProduct, 
    removeProduct,
    updateProduct,
    photoProduct,
    SearchProduct,
    relatedProduct
} = require('../controllers/productController')

const { userById } = require('../middlewares/user')

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')

router.get('/', allProduct)

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct)
router.param('userId', userById)

router.get('/photo/:productId', photoProduct);
router.post('/search', SearchProduct);

router.get('/related/:productId', relatedProduct)

router.get('/:productId', showProduct)
router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin], removeProduct)
router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin], updateProduct)
router.param('productId', productById)


module.exports = router