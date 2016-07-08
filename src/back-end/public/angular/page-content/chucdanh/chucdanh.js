"use strict";

(function () {

    angular.module("dw-backend.chucdanh", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("chucdanh", {
                    url: "/chucdanh",
                    templateUrl: "angular/page-content/chucdanh/chucdanh.html",
                    controller: "chucdanh.ctrl"
                })
            ;
        }])

        .controller("chucdanh.ctrl", function($scope, $modal, beChucDanhApi) {
            beChucDanhApi.getAllChucDanh().then(function (res) {
                $scope.dschucdanh = res.data;

            });
            $scope.fncaddChucdanh = function () {
                $modal.open({
                    templateUrl: "angular/page-content/chucdanh/add-chucdanh-modal.html",
                    controller: "add-chucdanh-modal.ctrl"
                });
            };
            $scope.remove = function(machucdanh){
                beChucDanhApi.removeChucDanh(machucdanh).then(function (res) {
                    beChucDanhApi.getAllChucDanh().then(function (res2) {
                        $scope.dschucdanh = res2.data;
                    });
                });
            }
        })

        .controller("add-chucdanh-modal.ctrl", function($scope, $modalInstance, beChucDanhApi) {
            $scope.cd = {};


            $scope.close = $modalInstance.dismiss;

            $scope.ok = function () {

                beChucDanhApi.addChucDanh($scope.cd).then(function (res) {
                    $modalInstance.close(res.data);

                })
            }

        })
    ;

})();