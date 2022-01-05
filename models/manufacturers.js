const manufacturers = (connection, Sequelize) => connection.define('manufacturers', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  country: { type: Sequelize.STRING },
}, { paranoid: true })

module.exports = manufacturers
