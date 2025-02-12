const tableName = 'Orders';


const up =  (queryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    external_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    subtotal_amount_cents: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    tax_amount_cents: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    shipping_cost_cents: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    estimated_delivery_date_utc: {
      type: Sequelize.DATE,
      primaryKey: true,
      allowNull: false,
    },
    seller_tax_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    buyer_tax_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
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