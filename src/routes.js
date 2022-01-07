const express = require('express')
const router = express.Router()

const FuncController = require('./controllers/FuncControllers')

router.get('/funcionarios', FuncController.buscarTodos)
router.get('/funcionario/:codigo', FuncController.buscarUm)
router.post('/funcionario',FuncController.inserir)
router.put('/funcionario/:codigo', FuncController.alterar)
router.delete('/funcionario/:codigo',FuncController.excluir)

module.exports = router