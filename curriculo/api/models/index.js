const sequelize = require("../config/database.js");
const { Sequelize } = require("sequelize");
const UserModel = require("./userModel.js");
const ExperienceModel = require("./experienceModel.js");
const EducationModel = require("./educationModel.js");

const User = UserModel(sequelize);
const Experience = ExperienceModel(sequelize);
const Education = EducationModel(sequelize);

User.hasMany(Experience, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Education, { foreignKey: "userId", onDelete: "CASCADE" });
Experience.belongsTo(User, { foreignKey: "userId" });
Education.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  sequelize,
  User,
  Experience,
  Education,
};
