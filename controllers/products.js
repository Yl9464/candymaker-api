const models = require('../models')

const getAllProducts = async (request, response) => {
  const products = await models.Products.findAll({

    include: [{ model: models.Manufacturers }],
  })

  return response.send(products)
}

const getAllProductsById = async (request, response) => {
  try {
    const { id } = request.params

    const productsId = await models.Products.findOne({
      where: { id },
      include: [{ model: models.Manufacturers }]
    })

    return productsId
      ? response.send(productsId)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Cannot get Products Id, try again')
  }
}

module.exports = {
  getAllProducts,
  getAllProductsById
}
