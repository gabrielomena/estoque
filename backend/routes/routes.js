const express = require('express')

const ProdutoController = require('../controllers/ProdutoController')

const routes = express.Router()


routes.get('/listar', ProdutoController.consultarVarios)

routes.get('/localizar/:id', ProdutoController.consultarUnico)

routes.post('/cadastrar', ProdutoController.cadastrar)

routes.put('/atualizar/:id', ProdutoController.atualizar)

routes.delete('/excluir/:id', ProdutoController.deletar)




module.exports = routes
