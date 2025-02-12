const tableName = 'ContractInformations';

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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    last_name: {
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

