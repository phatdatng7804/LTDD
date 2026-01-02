"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Donations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donations.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
      Donations.belongsTo(models.Projects, {
        foreignKey: "project_id",
        as: "project",
      });
    }
  }
  Donations.init(
    {
      user_id: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER,
      amount: DataTypes.DOUBLE,
      payment_method: DataTypes.STRING,
      transaction_id: DataTypes.STRING,
      note: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Donations",
    }
  );
  return Donations;
};
