/**
 * Created by LeVan on 6/17/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Hoc_vi', new mongoose.Schema(
    {
        mahocvi: String,
        tenhocvi: String,
        mota: String
    }
));