const {Router} = require('express');
const {Pool} = require('pg');
const router = Router();
const cors = require("cors");
module.exports = router;

const {getClientes,putClientes,getFacturas,putFacturas} = require('../controller/index.controller');

router.get('/clientes/:id_fiscal',getClientes);
router.post('/CrearClientes',putClientes);
router.get('/Facturas/:id_fiscal',getFacturas);
router.post('/CrearClientes',putFacturas);

module.export = router;