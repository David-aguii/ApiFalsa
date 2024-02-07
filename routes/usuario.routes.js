const express = require("express");
const router = express.Router();
const {
  crearUser,
  crearUserAndCompany,
} = require("../controllers/usuario.controllers");

router.get("/new", crearUser);
router.get("/company", crearUserAndCompany);
module.exports = router;
