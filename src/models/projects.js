"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      Projects.belongsTo(models.Categories, {
        foreignKey: "category_id",
        as: "category",
      });
      Projects.belongsTo(models.CharityFunds, {
        foreignKey: "fund_id",
        as: "fund",
      });
      Projects.hasMany(models.Donations, {
        foreignKey: "project_id",
        as: "donations",
      });
    }
  }
  Projects.init(
    {
      category_id: DataTypes.INTEGER,
      fund_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      short_description: DataTypes.TEXT,
      description: DataTypes.TEXT,
      goal_amount: DataTypes.DOUBLE,
      current_amount: DataTypes.DOUBLE,
      donation_count: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );
  return Projects;
};
