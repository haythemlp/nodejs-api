var mongoose = require('mongoose');

class Model {

    constructor() {

        this.table = null;
        this.columns = null;
        this.userModel = null


    }

    init() {
        if (this.table) this.userModel = mongoose.model(this.table, this.columns);
    }

    async save(req) {


        const model = new this.userModel(req);
        const result = await model.save();
        console.log('saved');
        return result

    }

    async get() {


        return await this.userModel.find();


    }

    async find(id) {
        return await this.userModel.findById(id);
    }

    async delete(id) {
         const user = await this.userModel.findByIdAndDelete(id);
         return user ? "deleted successfully" : "id not found";
    }

    async where(conditions) {
        return await this.userModel.find(conditions);
    }

}

return module.exports = Model;

