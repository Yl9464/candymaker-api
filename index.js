/* eslint-disable no-console */
const express = require('express')
const { getAllManufacturers, getManufacturerByName } = require('./controllers/manufacturers')
const { getAllProducts, getAllProductsByName } = require('./controllers/products')
const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturerByName)

app.get('/products', getAllProducts)

app.get('/products/:name', getAllProductsByName)

app.listen(1370, () => {
  console.log('Listening on port 1370...')
})
