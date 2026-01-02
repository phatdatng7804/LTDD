"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CharityFunds extends Model {
    static associate(models) {
      // define association here
      CharityFunds.hasMany(models.Projects, {
        foreignKey: "fund_id",
        as: "projects",
      });
    }
  }
  CharityFunds.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      bank_name: DataTypes.STRING,
      total_amount: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "CharityFunds",
    }
  );
  return CharityFunds;
};
