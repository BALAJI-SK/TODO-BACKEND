'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const db = require('../models/index');
module.exports =  (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init({
    task: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};

