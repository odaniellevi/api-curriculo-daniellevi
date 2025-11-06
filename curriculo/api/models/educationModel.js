const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Education = sequelize.define("Education", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    institution: { type: DataTypes.STRING, allowNull: false },
    course: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATEONLY },
    endDate: { type: DataTypes.DATEONLY },
  });
  return Education;
};
