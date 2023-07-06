'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_game_history.init({
    level_game: DataTypes.STRING,
    jumlah_main: DataTypes.STRING,
    jumlah_menang: DataTypes.STRING,
    jumlah_kalah: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_game_history',
    underscored: true,
  });
  return User_game_history;
};