const express = require('express')
const { Product, Category, Tag, ProductTag } = require('./models')
// const sequelize = require('./config/connection.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

async function init() {
    await require('./config/connection.js').sync()
    app.listen(process.env.PORT || 3000)
}

init()