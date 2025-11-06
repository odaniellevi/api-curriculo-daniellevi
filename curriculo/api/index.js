const express = require("express");
const app = express();

const dbUrl = process.env.DATABASE_URL;

app.get("/", (req, res) => {
  console.log("Variável DATABASE_URL:", dbUrl);

  if (dbUrl) {
    res.send(`
      <h1>API de Teste</h1>
      <p>A variável DATABASE_URL foi encontrada!</p>
      <p>Valor (parcial): ${dbUrl.substring(0, 20)}...</p>
    `);
  } else {
    res.status(500).send(`
      <h1>ERRO CRÍTICO</h1>
      <p>A variável DATABASE_URL é UNDEFINED.</p>
      <p>O Vercel não está injetando a variável de ambiente.</p>
    `);
  }
});

module.exports = app;
