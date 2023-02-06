const express = require('express')
const authConfig = require('../middlewares/auth')

const ProdutoController = require('../controllers/ProdutoController')
const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/LoginController')

const routes = express.Router()

//rotas cadastro e login
routes.post('/create',UserController.store)
routes.post('/login',LoginController.store)

//Middlewares
routes.use(authConfig)

//Rotas Produtos.
routes.get('/listar', ProdutoController.consultarVarios)
routes.get('/localizar/:id', ProdutoController.consultarUnico)
routes.post('/cadastrar', ProdutoController.cadastrar)
routes.put('/atualizar/:id', ProdutoController.atualizar)
routes.delete('/excluir/:id', ProdutoController.deletar)




module.exports = routes
