/**
 * Created by LeVan on 6/17/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Chuc_danh', new mongoose.Schema(
    {
        machucdanh: String,
        tenchucdanh: String,
        mota: String
    }
));