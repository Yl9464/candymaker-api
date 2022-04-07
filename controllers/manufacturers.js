const models = require('../models')

const getAllManufacturers = async (request, response) => {
  const manufacturers = await models.Manufacturers.findAll({

  // include: [{ model: models.Products }],
  })

  return response.send(manufacturers)
}

const getManufacturerByName = async (request, response) => {
  try {
    const { name } = request.params

    const manufacturerId = await models.Manufacturers.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` }
      },
      attributes: ['id', 'name', 'country'],
      include: [{
        model: models.Products,
        attributes: ['id', 'name', 'yearIntroduced']
      }],
    })

    return manufacturerId
      ? response.send(manufacturerId)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Cannot get Manufacturers Id, try again')
  }
}

module.exports = {
  getAllManufacturers,
  getManufacturerByName,
}
