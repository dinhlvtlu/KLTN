module.exports = function (staticConfig) {

    var Injector = require("./injector").Injector;
    var injector = new Injector();

    injector.setObjects({
        staticConfig: staticConfig,
        AdminUser: require("./dao/admin-user"),
        Hocvi: require("./dao/hocvi"),
        Chucdanh: require("./dao/chucdanh"),
        Khoa: require("./dao/khoa"),
        Bomon: require("./dao/bomon"),
        Giangvien: require("./dao/giangvien")

    });

    return injector;
};