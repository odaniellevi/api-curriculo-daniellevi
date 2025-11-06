const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

let sequelize;

try {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL não foi definida nas variáveis de ambiente.");
  }

  console.log("Tentando conectar ao banco de dados...");

  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: console.log,
  });

  console.log("Instância do Sequelize criada com sucesso.");
} catch (error) {
  console.error("❌ ERRO CRÍTICO AO INICIAR O SEQUELIZE:");
  console.error(error);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await wait(2000);

  throw new Error("Falha ao criar instância do Sequelize: " + error.message);
}

module.exports = sequelize;
