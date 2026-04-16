const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const audienceSchema = sequelize.define(
  "RunningText",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "running_texts",
    timestamps: false,
  }
);

module.exports = audienceSchema;
