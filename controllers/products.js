const models = require('../models')

const getAllProducts = async (request, response) => {
  const products = await models.Products.findAll({

    include: [{ model: models.Manufacturers }],
  })

  return response.send(products)
}

const getAllProductsByName = async (request, response) => {
  try {
    const { name } = request.params

    const productsId = await models.Products.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` }
      },
      attributes: ['id', 'name', 'yearIntroduced'],
      include: [{
        model: models.Manufacturers,
        attributes: ['id', 'name', 'country']
      }]
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
  getAllProductsByName
}
