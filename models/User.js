const Model = require('../config/Model');
const hash = require('../config/Hash');
const jwt = require('../config/JWT');
var mongoose = require('mongoose');

class User extends Model {

    constructor() {
        super();
        this.table = "users";
        this.columns = {
            name: String,
            email: String,
            password: String
        };
        this.init();


    }


    async register(req) {

        const validator = await this.userModel.findOne({email: req.email});
        if (validator) return {error: ' user is already registerd'};
        const model = new this.userModel(req);
        model.password = await hash.run(model.password);
        const result = await model.save();
        console.log('saved');
        return result

    }

    async Login(req) {
        const user = await this.userModel.findOne({email: req.email});
        if (!user) return {error: 'wrong email conditional'};
        const checkPassword = await hash.compare(user.password, req.password);
        if (!checkPassword) return {error: 'wrong corditionals'};
        const token = await jwt.generate(user);
        return {message: 'logged successfully', token: token}

    }


}


return module.exports = new User();