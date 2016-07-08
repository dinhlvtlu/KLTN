/**
 * Created by LeVan on 6/17/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Khoa', new mongoose.Schema(
    {
        makhoa: String,
        tenkhoa: String,
        sodienthoai: String,
        email: String,
        mota: String
    }
));