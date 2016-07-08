/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.khoa", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("khoa", {
                    url: "/khoa",
                    templateUrl: "angular/page-content/khoa/khoa.html",
                    controller: "khoa.ctrl"
                })
            ;
        }])

        .controller("khoa.ctrl", function($scope, $modal, beKhoaApi) {
            beKhoaApi.getAllKhoa().then(function (res) {
                $scope.dskhoa = res.data;
            });
            $scope.fncaddKhoa = function () {
                $modal.open({
                    templateUrl: "angular/page-content/khoa/add-khoa-modal.html",
                    controller: "add-khoa-modal.ctrl"
                });
            };
            $scope.remove = function(makhoa){
                beKhoaApi.removeKhoa(makhoa).then(function (res) {
                    beKhoaApi.getAllKhoa().then(function (res2) {
                        $scope.dskhoa = res2.data;
                    });
                });
            }
        })

        .controller("add-khoa-modal.ctrl", function($scope, $modalInstance, beKhoaApi) {

            $scope.k = {};


            $scope.close = $modalInstance.dismiss;

            $scope.ok = function () {
                beKhoaApi.addKhoa($scope.k).then(function (res) {

                    $modalInstance.close(res.data);

                })
            }

        })
    ;

})();