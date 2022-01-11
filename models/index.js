const Sequelize = require('sequelize')
const ManufacturersModels = require('./manufacturers')
const ProductsModels = require('./products')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Manufacturers = ManufacturersModels(connection, Sequelize)
const Products = ProductsModels(connection, Sequelize, Manufacturers)


Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = {
  Manufacturers,
  Products
}
