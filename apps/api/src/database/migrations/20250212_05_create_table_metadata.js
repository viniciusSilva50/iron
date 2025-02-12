const tableName = 'Metadatas';

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
    data: {
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