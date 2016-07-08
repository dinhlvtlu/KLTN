"use strict";

(function () {

    angular.module("dw-backend.product-info", [
        "ui.router"
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state("product-info", {
                    url: "/product-info",
                    templateUrl: "angular/page-content/product-info/product-info.html",
                    controller: "product-info.ctrl"
                })
            ;
        }])

        .controller("product-info.ctrl", function($scope, $modal, beProductApi, beEditContentModal, beEditImageModal) {

            beProductApi.getAllProduct().then(function (res) {
                $scope.products = res.data;
            });

            $scope.addProduct = function () {
                $modal.open({
                    templateUrl: "angular/page-content/product-info/add-product-modal.html",
                    controller: "add-product-modal.ctrl"
                }).result.then(function (prod) {
                    $scope.products.push(prod);
                })
            };

            $scope.editProd = function (prod, content) {
                beEditContentModal.open(prod._id, content).then(function (data) {
                    prod[data.type] = data.content;
                });
            };

            $scope.editImage = function (prod, image) {
                beEditImageModal.open(prod._id, image).then(function (img) {
                    prod.image = img;
                });
            };

        })

        .controller("add-product-modal.ctrl", function($scope, Upload, $modalInstance, beProductApi) {

            $scope.product = {};

            $scope.$watch("upload_image", function(value) {
                if(value) {
                    Upload.dataUrl(value, true).then(function(url){
                        $scope.product.image = url;
                    });
                }
            });

            $scope.close = $modalInstance.dismiss;
            
            $scope.ok = function () {
                beProductApi.addNewProduct($scope.product).then(function (res) {
                    $modalInstance.close(res.data);
                })
            }

        })

        .filter('slice', function () {
            return function (arr, start, limit) {
                return (arr || []).slice(start, start + limit);
            };
        })

    ;

})();