// app/Controllers/ColaboradoresApiController.js

const ColaboradoresModel = require('../Models/ColaboradoresModel');

const ColaboradoresApiController = {
  async list(req, res) {
    const colaboradores = await ColaboradoresModel.findAll();
    res.json(colaboradores);
  },

  async get(req, res) {
    const { id } = req.params;
    const colaborador = await ColaboradoresModel.findByPk(id);
    if (colaborador) {
      res.json(colaborador);
    } else {
      res.status(404).json({ erro: "Colaborador não encontrado" });
    }
  },

  async insert(req, res) {
    const { nome, cargo, salario } = req.body;
    const novoColaborador = await ColaboradoresModel.create({ nome, cargo, salario });
    res.status(201).json(novoColaborador);
  }
};

module.exports = ColaboradoresApiController;
