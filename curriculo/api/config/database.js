const { Sequelize } = require("sequelize");

if (!process.env.DATABASE_URL) {
  throw new Error(
    "FATAL: DATABASE_URL não foi definida nas variáveis de ambiente do Vercel."
  );
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = sequelize;
