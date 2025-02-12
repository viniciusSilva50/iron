const tableName = 'Items';

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
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    },
    unit_price_cents: {
      type: Sequelize.BIGINT,
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