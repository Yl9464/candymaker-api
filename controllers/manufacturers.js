const models = require('../models')

const getAllManufacturers = async (request, response) => {
  const manufacturers = await models.Manufacturers.findAll()

  return response.send(manufacturers)
}

const getAllManufacturersById = async (request, response) => {
  try {
    const { id } = request.params

    const manufacturerId = await models.Manufacturers.findOne({ where: { id } })

    return manufacturerId
      ? response.send(manufacturerId)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Cannot get Manufacturers Id, try again')
  }
}

module.exports = {
  getAllManufacturers,
  getAllManufacturersById
}
