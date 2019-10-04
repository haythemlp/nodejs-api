const UserModel= require ('../models/User');
class User {



    async index(req,res){
        let result= await  UserModel.get();
        return res.send(result)
    }

    async show(req,res){
        let result= await UserModel.find(req.params.id);
        return res.send(result)

    }

    async delete(req,res){
        let result= await UserModel.delete(req.params.id);
        return res.send(result)

    }
}

module.exports = new User();