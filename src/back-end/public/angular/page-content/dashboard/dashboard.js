"use strict";

(function () {

    angular.module("dw-backend.dashboard", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("dashboard", {
                    url: "/dashboard",
                    templateUrl: "angular/page-content/dashboard/dashboard.html",
                    controller: "dashboard.ctrl"
                })
            ;
        }])

        .controller("dashboard.ctrl", function($scope, User, $state) {

            if(!User.isLogged) {
                $state.go("login");
            }

        })
    ;
})();