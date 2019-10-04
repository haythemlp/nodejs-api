const jwt = require('../config/JWT');

class Auth {

    static async check(req, res, next) {

        const token = req.header('token');
        if (!token) return  res.status(401).send('Acces denied,No token');
            const decode = await jwt.verify(token);
          if (!decode) return  res.status(400).send('invalide token');
            console.log(decode);
            next();
    }

}

return module.exports = Auth;
