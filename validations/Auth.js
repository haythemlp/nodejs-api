const Joi = require('joi')

class Auth {

    static async register(body) {

        const schema = Joi.object().keys({
            name: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().alphanum().min(9).required(),
            email: Joi.string().email({minDomainAtoms: 2}).required()
        });

        return await Joi.validate(body, schema);

    }

    static async login(body) {

        const schema = Joi.object().keys({
            password: Joi.string().alphanum().min(9).required(),
            email: Joi.string().email({minDomainAtoms: 2}).required()
        });

        return await Joi.validate(body, schema);

    }
}

module.exports = Auth;