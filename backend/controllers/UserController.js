const {User}= require('../models')
const bcrypt = require('bcrypt')
const yup = require('yup')

class UserController {
    static async store(req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(6)
        })

        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(422).json({ error: err.errors })
        }

        const { name, email, password } = req.body

        const emailExist = await User.findOne({ where: { email: email } })

        if (emailExist) {
            return res.status(400).json("Email já está sendo usado")
        }

        // create password
        const salt = await bcrypt.genSalt(10)
        const password_hash = await bcrypt.hash(password,salt)


        try {
            const newUser = await User.create({
                name, 
                email,
                password: password_hash
            })
            return res.status(201).json(newUser)
        } catch (error) {
                return res.json(error)
        }
    }
}
module.exports = UserController