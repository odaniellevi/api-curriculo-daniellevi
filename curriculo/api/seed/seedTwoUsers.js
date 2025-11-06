const { User, Education, Experience } = require("../models/index.js");

async function seedTwoUsers() {
  try {
    console.log("🧹 Limpando tabelas antes de inserir novos dados...");
    await Education.destroy({ where: {} });
    await Experience.destroy({ where: {} });
    await User.destroy({ where: {} });

    console.log("🌱 Inserindo novos usuários...");

    // ========== Usuário 1 ==========
    const user1 = await User.create({
      name: "Daniel Lima",
      email: "daniel@email.com",
      phone: "81999999999",
    });

    await Promise.all([
      Education.bulkCreate([
        {
          course: "Tecnólogo em Sistemas para Internet",
          institution: "Universidade Católica de Pernambuco",
          startYear: 2024,
          endYear: 2026,
          userId: user1.id,
        },
        {
          course: "Curso Técnico em Informática",
          institution: "ETE Porto Digital",
          startYear: 2020,
          endYear: 2022,
          userId: user1.id,
        },
      ]),
      Experience.bulkCreate([
        {
          company: "NexusByte",
          position: "Desenvolvedor Front-End",
          startYear: 2024,
          endYear: null,
          description:
            "Criação de interfaces modernas com React e integração de APIs REST.",
          userId: user1.id,
        },
        {
          company: "Porto Digital",
          position: "Residente Tecnológico",
          startYear: 2024,
          endYear: null,
          description:
            "Atuação em projetos de inovação e transformação digital.",
          userId: user1.id,
        },
      ]),
    ]);

    // ========== Usuário 2 ==========
    const user2 = await User.create({
      name: "Maria Souza",
      email: "maria@email.com",
      phone: "81988888888",
    });

    await Promise.all([
      Education.bulkCreate([
        {
          course: "Engenharia de Software",
          institution: "UFPE",
          startYear: 2022,
          endYear: null,
          userId: user2.id,
        },
      ]),
      Experience.bulkCreate([
        {
          company: "InovaTech",
          position: "Desenvolvedora Full Stack",
          startYear: 2023,
          endYear: null,
          description:
            "Desenvolvimento de aplicações web e APIs integradas com Node.js e PostgreSQL.",
          userId: user2.id,
        },
      ]),
    ]);

    console.log("✅ Seed de dois usuários concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao rodar o seed:", error);
  }
}

module.exports = seedTwoUsers;
