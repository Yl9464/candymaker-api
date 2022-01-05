const Sequelize = require('sequelize')
const ManufacturersModels = require('./manufacturers')
const ProductsModels = require('./products')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = ManufacturersModels(connection, Sequelize)
const Products = ProductsModels(connection, Sequelize, Manufacturers)


Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = {
  Manufacturers,
  Products
}
