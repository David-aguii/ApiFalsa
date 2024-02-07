const Empresa = require("../models/empresa.model");
exports.createEmpresa = (req, res) => {
  const newCompany = new Empresa();
  res.status(200).json(newCompany);
};
