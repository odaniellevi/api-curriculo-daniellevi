import { Sequelize } from "sequelize";
import UserModel from "./userModel.js";
import ExperienceModel from "./experienceModel.js";
import EducationModel from "./educationModel.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const User = UserModel(sequelize);
const Experience = ExperienceModel(sequelize);
const Education = EducationModel(sequelize);

User.hasMany(Experience, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Education, { foreignKey: "userId", onDelete: "CASCADE" });
Experience.belongsTo(User, { foreignKey: "userId" });
Education.belongsTo(User, { foreignKey: "userId" });

export { sequelize, User, Experience, Education };
