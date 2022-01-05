const models = require('../models')

const getAllProducts = async (request, response) => {
  const products = await models.Products.findAll()

  return response.send(products)
}

module.exports = {
  getAllProducts
}
