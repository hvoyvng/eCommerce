const router = require('express').Router()
const { Category, Product } = require('../models')
const res = require('express/lib/response')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    const categories = await Category.findAll({ include: [Product] })
    res.json(categories)
})

router.get('/categories/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    const categories = await Category.findOne({ where: { id: req.params.id }, include: [Product] })
    res.json(categories)
})

router.post('/categories', (req, res) => {
    // create a new category
    const categories = await Category.create(req.body)
    res.sendStatus(200)
})

router.put('/categories/:id', (req, res) => {
    // update a category by its `id` value
    const categories = await Category.update(req.body, { where: { id: req.params.id } })
    res.sendStatus(200)
})

router.delete('/categories/:id', (req, res) => {
    // delete a category by its `id` value
    const categories = await Category.destroy({ where: { id: req.params.id } })
    res.sendStatus(200)
})

module.exports = router
