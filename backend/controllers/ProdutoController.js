const { Produtos } = require('../models')

class ProdutoController {

    static async consultarVarios(req,res)
    {
        try {
            const produtos = await Produtos.findAll()
            res.status(200).json({
                data: produtos
            })    
        } catch (error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }

    static async cadastrar(req, res) {
        try {
            const produto = await Produtos.create({
                codigo: req.body.codigo,
                descricao: req.body.descricao,
                estoque: req.body.estoque
            })
            res.status(200).json({
                data: produto
            })
        } catch (error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }


    static async consultarUnico(req,res)
    {
        try {
            const produto = await Produtos.findByPk(req.params.id)
            if(!produto){
                res.status(404).json({
                    message:"Produto não existe!"
                })
            }else{
                res.status(200).json({
                    data:produto
                })
            }
        } catch (error) {
            res.status(500).json({
                erro:true,
                message: error.message
            })
        }
    }

    static async atualizar(req,res)
    {
        try {
            const produto = await Produtos.findByPk(req.params.id)
            if(!produto){
                res.status(404).json({
                    message:"Produto não existe!"
                })
            }else{
                await produto.update({
                    codigo: req.body.codigo,
                    descricao: req.body.descricao,
                    estoque: req.body.estoque
                })
                res.status(200).json({
                    data:produto
                })
            }

        } catch (error) {
            res.status(500).json({
                erro:true,
                message: error.message
            })
        }
    }
    

    static async deletar(req,res)
    {
        try {
            const produto = await Produtos.findByPk(req.params.id)
            await produto.destroy()

            res.status(200).json({
                success:true,
                message: "Produto deletado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                erro:true,
                message: error.message
            })
        }
    }
















}



module.exports = ProdutoController
