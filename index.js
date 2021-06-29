const express = require('express')
const app = express();
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// import routers
const authRouter = require('./routers/auth')
const userRouter = require('./routers/users')
const categoryRouter = require('./routers/categories')
const productRouter = require('./routers/products')
const braintreeRouter = require('./routers/braintree')
const orderRouter = require('./routers/orders')

require('dotenv').config()

mongoose.connect(process.env.DATABASE,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('DB is connected'))
.catch(()=>console.log('DB is not connected'))

//  middleware
app.use(express.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(cors())

// Routes middlware
app.use('/api',authRouter)
app.use('/api',userRouter)
app.use('/api/category',categoryRouter)
app.use('/api/product', productRouter)
app.use('/api/braintree', braintreeRouter)
app.use('/api/order', orderRouter)

const port = process.env.PORT || 5050
app.listen(port, ()=>console.log(`Server is running on port ${port}`))