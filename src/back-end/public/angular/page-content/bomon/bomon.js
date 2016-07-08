/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.bomon", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("bomon", {
                    url: "/bomon",
                    templateUrl: "angular/page-content/bomon/bomon.html",
                    controller: "bomon.ctrl"
                })
            ;
        }])

        .controller("bomon.ctrl", function($scope, $modal, beBoMonApi) {
            beBoMonApi.getAllBoMon().then(function (res) {
                $scope.dsbomon = res.data;

            });
            $scope.fncaddBoMon = function () {

                $modal.open({
                    templateUrl: "angular/page-content/bomon/add-bomon-modal.html",
                    controller: "add-bomon-modal.ctrl"
                });
            };
            $scope.remove = function(mabomon){
                beBoMonApi.removeBoMon(mabomon).then(function (res) {
                    beBoMonApi.getAllBoMon().then(function (res2) {
                        $scope.dsbomon = res2.data;
                    });
                });
            }
        })
        .controller("add-bomon-modal.ctrl", function($scope, $modalInstance, beBoMonApi, beKhoaApi) {
            beKhoaApi.getAllKhoa().then(function (res) {
                $scope.dskhoa = res.data;
            });
            $scope.bm = {};


            $scope.close = $modalInstance.dismiss;

            $scope.ok = function () {

                beBoMonApi.addBoMon($scope.bm).then(function (res) {
                    $modalInstance.close(res.data);

                })
            }

        })
    ;
})();