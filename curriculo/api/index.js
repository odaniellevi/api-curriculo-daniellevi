require("pg");

const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index.js");
const userRoute = require("./routes/userRoute.js");
const experienceRoute = require("./routes/experienceRoute.js");
const educationRoute = require("./routes/educationRoute.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 API do Currículo de Daniel Levi</h1>
    <p>API rodando na Vercel!</p>
    <ul>
      <li><a href="/users">/users</a></li>
      <li><a href="/experiences">/experiences</a></li>
      <li><a href="/educations">/educations</a></li>
    </ul>
  `);
});

app.use("/users", userRoute);
app.use("/experiences", experienceRoute);
app.use("/educations", educationRoute);

module.exports = app;
