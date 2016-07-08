"use strict";

(function () {

    angular.module("dw-backend.app", [
            "dw-backend.sidebar-menu",
            "dw-backend.top-navigation",
            "dw-backend.dashboard",
            "dw-backend.login",
            "dw-backend.product-info",
            "dw-backend.hocvi",
            "dw-backend.chucdanh",
            "dw-backend.khoa",
            "dw-backend.bomon",
            "dw-backend.giangvien",
            "dw-backend.edit-image-modal",
            "dw-backend.edit-content-modal",

            "dw-backend.service",
            "dw-backend.theme",

            "dw-backend.api.product",
            "dw-backend.api.hocvi",
            "dw-backend.api.chucdanh",
            "dw-backend.api.khoa",
            "dw-backend.api.bomon",
            "dw-backend.api.giangvien",
            "ngFileUpload",
            "ui.bootstrap"

        ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/dashboard");
        })

    ;

})();

