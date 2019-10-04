const UserModel= require ('../models/User');
const AuthValidation= require('../validations/Auth');

class AuthController {

    async register(req, res) {

        try {
            await AuthValidation.register(req.body);
        }catch (e) {
            return res.status(400).send({message :e.details[0].message});
        }

        const result=await UserModel.register(req.body);
        return res.send(result);
    }
    async login(req, res) {

        try {
            await AuthValidation.login(req.body);

        }catch (e) {
            return res.status(400).send({message :e.details[0].message});
        }

        const result=await UserModel.Login(req.body);
        return res.send(result);
    }
}

module.exports = new AuthController();