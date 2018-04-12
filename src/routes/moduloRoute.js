const express = require('express');
const router = express.Router();
const moduloController = require('../controllers/moduloController');

router.post('/salvar', moduloController.salvarModulo);
router.get('/obterModulos', moduloController.buscarTodosModulos);
router.get('/obterModulosPorSistema/:id', moduloController.buscarTodosModulosPorSistema);

module.exports = router;