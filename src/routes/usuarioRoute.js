const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/salvar', usuarioController.salvarUsuario);
router.get('/obterUsuarios', usuarioController.buscarTodosUsuarios);
router.get('/obterUsuarioPorId/:id', usuarioController.buscarUsuarioPorId);
router.get('/obterUsuarioPorEmail/:email', usuarioController.buscarUsuarioPorEmail);
router.post('/editar/:id', usuarioController.editarUsuario);
router.get('/excluir/:id', usuarioController.excluirUsuario);
router.post('/login', usuarioController.logarUsuario);

module.exports = router;