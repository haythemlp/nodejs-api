var mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect("mongodb://localhost/mean",
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('BD connected'))
        .catch(() => console.error('erro'));
}