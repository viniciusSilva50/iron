const tableName = 'ShippingLocations';

const up =  (queryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    order_id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    first_address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    second_address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    region: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  })
}

const down = (queryInterface, _Sequelize) => {
  return queryInterface.dropTable(tableName)
}

module.exports = {
  up,
  down
}