import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import userRoute from "./routes/userRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import educationRoute from "./routes/educationRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 API do Currículo de Daniel Levi</h1>
    <p>Banco conectado e rodando na Vercel!</p>
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

export default app;
