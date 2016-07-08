/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.giangvien", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("giangvien", {
                    url: "/giangvien",
                    templateUrl: "angular/page-content/giangvien/giangvien.html",
                    controller: "giangvien.ctrl"
                })
            ;
        }])

        .controller("giangvien.ctrl", function($scope, $modal, beGiangVienApi) {
            beGiangVienApi.getAllGiangVien().then(function (res) {
                $scope.dsgiangvien = res.data;
            });
            $scope.fncaddGiangvien = function () {
                $modal.open({
                    templateUrl: "angular/page-content/giangvien/add-giangvien-modal.html",
                    controller: "add-giangvien-modal.ctrl"
                });
            };
            $scope.remove = function(magiangvien){
                beGiangVienApi.removeGiangVien(magiangvien).then(function (res) {
                    beGiangVienApi.getAllGiangVien().then(function (res2) {
                        $scope.dsgiangvien = res2.data;
                    });
                });
            }
        })

        .controller("add-giangvien-modal.ctrl", function($scope, $modalInstance, beGiangVienApi,beHocViApi, beChucDanhApi,beKhoaApi,beBoMonApi) {
            beKhoaApi.getAllKhoa().then(function (res) {
                $scope.dskhoa = res.data;

            });
            beHocViApi.getAllHocVi().then(function (res) {
                $scope.dshocvi = res.data;

            });
            beChucDanhApi.getAllChucDanh().then(function (res) {
                $scope.dschucdanh = res.data;

            });
            beBoMonApi.getAllBoMon().then(function (res) {
                $scope.dsbomon = res.data;

            });
            $scope.gv = {};


            $scope.close = $modalInstance.dismiss;

            $scope.ok = function () {
                beGiangVienApi.addGiangVien($scope.gv).then(function (res) {

                    $modalInstance.close(res.data);

                })
            }

        })
    ;

})();