"use strict";

(function () {

    angular.module("dw-backend.edit-image-modal", [
    ])

        .factory("beEditImageModal", function($modal) {
            return {
                open: function (pid, prod) {
                    return $modal.open({
                        templateUrl: "angular/page-content/product-info/edit/edit-image-modal.html",
                        controller: "edit-image-modal.ctrl",
                        resolve: {
                            prod: function () {
                                return prod;
                            },
                            pid: function () {
                                return pid;
                            }
                        }
                    }).result
                }
            };
        })

        .controller("edit-image-modal.ctrl", function($scope, $modalInstance, prod, pid, beProductApi, Upload) {
            $scope.close = $modalInstance.dismiss;
            $scope.prod = prod;

            $scope.$watch("upload_image", function(value) {
                if(value) {
                    Upload.dataUrl(value, true).then(function(url){
                        $scope.prod.image = url;
                    });
                }
            });

            $scope.ok = function () {
                beProductApi.editProduct(pid, $scope.prod).then(function () {
                    $modalInstance.close($scope.prod.image);
                });
            }
        })

    ;

})();