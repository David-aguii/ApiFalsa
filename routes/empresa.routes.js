const express = require("express");
const { createEmpresa } = require("../controllers/empresa.controllers");
const router = express.Router();

router.get("/new", createEmpresa);

module.exports = router;
