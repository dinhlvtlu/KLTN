/**
 * Created by LeVan on 6/17/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Bo_mon', new mongoose.Schema(
    {
        mabomon: String,
        tenbomon: String,
        tenkhoa: String,
        sodienthoai: String,
        email: String,
        mota: String
    }
));