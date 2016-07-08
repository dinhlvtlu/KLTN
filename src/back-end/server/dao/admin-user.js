var mongoose = require('mongoose');

module.exports = mongoose.model('Admin_User', new mongoose.Schema(
    {
        username: String,
        password: String,
        name: String
    }
));