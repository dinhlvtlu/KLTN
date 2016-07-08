/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.hocvi", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("hocvi", {
                    url: "/hocvi",
                    templateUrl: "angular/page-content/hocvi/hocvi.html",
                    controller: "hocvi.ctrl"
                })
            ;
        }])

        .controller("hocvi.ctrl", function($scope, $modal, beHocViApi) {
            beHocViApi.getAllHocVi().then(function (res) {
                $scope.dshocvi = res.data;
            });
            $scope.fncaddHocvi = function () {
                $modal.open({
                    templateUrl: "angular/page-content/hocvi/add-hocvi-modal.html",
                    controller: "add-hocvi-modal.ctrl"
                });
            };
            $scope.remove = function(mahocvi){
                beHocViApi.removeHocVi(mahocvi).then(function (res) {
                    beHocViApi.getAllHocVi().then(function (res2) {
                        $scope.dshocvi = res2.data;
                    });
                });
            }
        })

        .controller("add-hocvi-modal.ctrl", function($scope, $modalInstance, beHocViApi) {

            $scope.hv = {};


            $scope.close = $modalInstance.dismiss;

            $scope.ok = function () {
                beHocViApi.addHocVi($scope.hv).then(function (res) {

                    $modalInstance.close(res.data);

                })
            }

        })
    ;

})();