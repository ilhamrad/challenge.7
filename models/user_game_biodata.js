'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_game_biodata.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    umur: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_game_biodata',
    underscored: true,
  });
  return User_game_biodata;
};