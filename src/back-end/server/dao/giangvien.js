/**
 * Created by LeVan on 6/17/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Giang_vien', new mongoose.Schema(
    {
        magiangvien: String,
        tengiangvien: String,
        gioitinh: String,
        ngaysinh: Date,
        sodienthoai: Number,
        email: String,
        diachia: String,
        thoigianbatdau: Date,
        hocvi: String,
        chucdanh: String,
        bomon: String,
        khoa: String,
        tinhtrang: String
    }
));