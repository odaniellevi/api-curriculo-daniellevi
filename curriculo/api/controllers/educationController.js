const { Education, User } = require("../models/index.js");

exports.getAllEducations = async (req, res) => {
  try {
    const educations = await Education.findAll({ include: User });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id, {
      include: User,
    });
    if (!education)
      return res.status(404).json({ error: "Educação não encontrada" });
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const { institution, course, startDate, endDate, userId } = req.body;
    const education = await Education.create({
      institution,
      course,
      startDate,
      endDate,
      userId,
    });
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByPk(id);
    if (!education)
      return res.status(404).json({ error: "Educação não encontrada" });

    const { institution, course, startDate, endDate, userId } = req.body;
    await education.update({ institution, course, startDate, endDate, userId });
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByPk(id);
    if (!education)
      return res.status(404).json({ error: "Educação não encontrada" });

    await education.destroy();
    res.json({ message: "Educação removida com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
