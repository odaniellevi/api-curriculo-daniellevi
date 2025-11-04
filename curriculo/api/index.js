import express from "express";
import cors from "cors";
import { sequelize } from "./models/index.js";
import userRoute from "./routes/userRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import educationRoute from "./routes/educationRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API do Currículo rodando 🚀"));

// Rotas principais
app.use("/users", userRoute);
app.use("/experiences", experienceRoute);
app.use("/educations", educationRoute);

// Conexão e sincronização com o banco
await sequelize.sync({ force: false });
console.log("Banco sincronizado com sucesso!");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
