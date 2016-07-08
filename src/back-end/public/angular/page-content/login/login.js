"use strict";

(function () {

    angular.module("dw-backend.login", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: "angular/page-content/login/login.html",
                    controller: "login.ctrl"
                })
            ;
        }])

        .controller("login.ctrl", function($scope, beSecurityService) {

            $scope.login = function () {
                beSecurityService.login($scope.user).then(function () {
                    $scope.error = "Sai tên tài khoản hoặc mật khẩu";
                })
            }

        })

    ;

})();