import { sequelize } from "./models/index.js";

await sequelize.sync({ force: true });
console.log("Banco sincronizado com sucesso!");
