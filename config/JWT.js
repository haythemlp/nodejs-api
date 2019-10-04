const jwt = require('jsonwebtoken');
const privateKey = 'privatekey';

class JWT {

    static async generate(user) {
        return await jwt.sign({_id: user._id}, privateKey)
    }

    static async verify(token) {
        try {
            const decode = await jwt.verify(token, privateKey)
            return decode;
        } catch (e) {
            return false;
        }

    }


}

return module.exports = JWT;
