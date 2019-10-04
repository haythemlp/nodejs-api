const bcrypt = require('bcrypt');

class Hash {
    static  async  run(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    };

    static async compare(hashedPassword,givenPassword){
      return await  bcrypt.compare(givenPassword,hashedPassword);
    }

}

return module.exports = Hash;