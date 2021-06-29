const category = require('../models/category')
const Category = require('../models/category')

exports.createCategory = (req, res) => {

    const category = new Category(req.body)

    category.save((err, category)=>{
        if(err) {
            return res.status(400).json({
                error : 'Bad request!!!'
            })
        }

        res.json({
            category: category
        })
    })
}

exports.categoryById = (req, res, next, id) => {

    Category.findById(id).exec((err, category)=>{
        if(err || !category){
            return res.status(400).json({
                error: 'category not found!!'
            })
        }
        req.data = category
        next()
    })
}


exports.showCategory = (req, res) => {

    res.json({
        category: req.data
    })
}

exports.updateCategory = (req, res) => {

    let category = req.data

    category.name = req.body.name

    category.save((err, category)=>{
        if(err){
            return res.status(400).json({
                error: 'category not found it, to make the update!!'
            })
        }

        res.json({
            category,
            message: 'category is update!!'
        })
    })
}


exports.removeCategory = (req, res) => {

    let category = req.data

    category.remove((err, category)=>{
        if(err || !category){
            return res.status(404).json({
                error: 'category not found!!'
            })
        }

        res.status(204).json({
            message: 'category deleted'
        })
    })
}


exports.showAllCategories = (req, res) => {

    Category.find().exec((err, categories)=>{
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        res.json({
            categories
        })
    })
}