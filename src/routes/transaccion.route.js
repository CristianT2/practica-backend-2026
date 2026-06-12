const express = require('express');
const router = express.Router();
const transaccionCtrl = require('../controllers/transaccion.controller');

router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/cliente/:email', transaccionCtrl.getTransaccionesPorCliente);
router.get('/buscar/:origen/:destino', transaccionCtrl.getTransaccionesPorIdiomas);

module.exports = router;