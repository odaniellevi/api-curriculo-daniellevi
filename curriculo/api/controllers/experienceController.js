const { Experience, User } = require("../models/index.js");

exports.getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({ include: User });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id, {
      include: User,
    });
    if (!experience)
      return res.status(404).json({ error: "Experiência não encontrada" });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const { company, position, startDate, endDate, description, userId } =
      req.body;
    const experience = await Experience.create({
      company,
      position,
      startDate,
      endDate,
      description,
      userId,
    });
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByPk(id);
    if (!experience)
      return res.status(404).json({ error: "Experiência não encontrada" });

    const { company, position, startDate, endDate, description, userId } =
      req.body;
    await experience.update({
      company,
      position,
      startDate,
      endDate,
      description,
      userId,
    });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByPk(id);
    if (!experience)
      return res.status(404).json({ error: "Experiência não encontrada" });

    await experience.destroy();
    res.json({ message: "Experiência removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
