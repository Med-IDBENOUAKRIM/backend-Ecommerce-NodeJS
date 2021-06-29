const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 35,
        required: true
    },
    description: {
        type: String,
        maxlength: 2000,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Boolean,
        required: false,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)