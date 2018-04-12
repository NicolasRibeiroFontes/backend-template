const express = require('express');
const router = express.Router();
const moduloController = require('../controllers/moduloController');

router.post('/salvar', moduloController.salvarModulo);
router.get('/obterModulos', moduloController.buscarTodosModulos);
router.get('/obterModulosPorSistema/:id', moduloController.buscarTodosModulosPorSistema);
router.get('/obterModulosSemSistema', moduloController.buscarModulosSemSistema);
router.post('/checarPermissao', moduloController.checarPermissao);

module.exports = router;