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

// Rota base
app.get("/", (req, res) => res.send("API do Currículo rodando 🚀"));

// Rotas principais
app.use("/users", userRoute);
app.use("/experiences", experienceRoute);
app.use("/educations", educationRoute);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco estabelecida com sucesso!");

    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados com o banco!");

    const { default: seedTwoUsers } = await import("./seed/seedTwoUsers.js");
    await seedTwoUsers();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
}

startServer();
