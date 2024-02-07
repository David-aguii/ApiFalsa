const Usuario = require("../models/user.model");
const Empresa = require("../models/empresa.model");
exports.crearUser = (req, res) => {
  const newUser = new Usuario();
  res.status(200).json(newUser);
};
exports.crearUserAndCompany = (req, res) => {
  const response = {
    usuario: new Usuario(),
    empresa: new Empresa(),
  };
  res.status(200).json(response);
};
