// app/Models/ColaboradoresModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const ColaboradoresModel = sequelize.define('colaboradores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'colaboradores',
  timestamps: false
});

module.exports = ColaboradoresModel;
