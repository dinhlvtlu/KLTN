var mongoose = require('mongoose');

module.exports = mongoose.model('Product', new mongoose.Schema(
    {
        name: String,
        principle: String,
        use: String,
        guide: String,
        term: String,
        image: String,
        info: String
    }
));