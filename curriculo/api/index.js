import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import userRoute from "./routes/userRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import educationRoute from "./routes/educationRoute.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API do Currículo rodando 🚀"));

// Rotas principais
app.use("/users", userRoute);
app.use("/experiences", experienceRoute);
app.use("/educations", educationRoute);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.sync({ force: false });
        console.log("Banco sincronizado com sucesso!");
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    } catch (error) {
        console.error("Erro ao sincronizar o banco:", error);
    }
}

startServer();
