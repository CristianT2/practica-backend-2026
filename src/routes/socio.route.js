const express = require('express');
const router = express.Router();
const socioCtrl = require('../controllers/socio.controller');

router.get('/', socioCtrl.getSocios);
router.get('/activos', socioCtrl.getSociosActivos);
router.post('/', socioCtrl.createSocio);
router.put('/:id', socioCtrl.updateSocio);
router.delete('/:id', socioCtrl.deleteSocio);

module.exports = router;