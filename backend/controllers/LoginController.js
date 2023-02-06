const {User}= require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const yup = require('yup')
const authConfig = require('../config/auth')

class LoginController {

    static async store(req, res) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
          });

          if(!(await schema.isValid(req.body))){
            return res.status(422).json({error: "Os dados não conferem"})
          }

          const {email, password} = req.body;

          const user = await User.findOne({where:{email}})

          if(!user){
            return res.status(404).json({ erro: "os dados nao conferem" });
          }

          //checkPassword

          const checkPassword = await bcrypt.compare(password, user.password)

          if(!checkPassword){
            return res.status(404).json({ erro: "os dados nao conferem" });
          }

          
        res.status(200).json({
            id: user.id,
            name: user.name,
            email:user.email,
            token: jwt.sign({id:user.id, name:user.name}, authConfig.secret, {expiresIn: authConfig.expiresIn})
        })

          
          
    }

}
module.exports = LoginController