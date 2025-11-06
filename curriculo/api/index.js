const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

const dbUrl = process.env.DATABASE_URL;

let sequelizeInstance = null;
let connectionError = null;

try {
  sequelizeInstance = new Sequelize(dbUrl, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} catch (error) {
  connectionError = error;
}

app.get("/", (req, res) => {
  if (connectionError) {
    res.status(500).send(`
      <h1>Erro ao criar a instância do Sequelize</h1>
      <pre>${connectionError.stack}</pre>
    `);
  } else if (sequelizeInstance) {
    res.send(`
      <h1>API de Teste Final</h1>
      <p>A variável DATABASE_URL foi encontrada!</p>
      <p>A instância do Sequelize foi criada com SUCESSO!</p>
    `);
  } else {
    res.status(500).send(`
      <h1>Erro desconhecido</h1>
      <p>O Sequelize não foi criado, mas nenhum erro foi pego.</p>
    `);
  }
});

module.exports = app;
