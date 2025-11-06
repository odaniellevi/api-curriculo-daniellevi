const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Experience = sequelize.define("Experience", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    company: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATEONLY },
    endDate: { type: DataTypes.DATEONLY },
    description: { type: DataTypes.TEXT },
  });
  return Experience;
};
