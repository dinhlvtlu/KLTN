"use strict";

(function () {

    angular.module("dw-backend.edit-content-modal", [
    ])

        .factory("beEditContentModal", function($modal) {
            return {
                open: function (pid, content) {
                    return $modal.open({
                        templateUrl: "angular/page-content/product-info/edit/edit-content-modal.html",
                        controller: "edit-content-modal.ctrl",
                        resolve: {
                            content: function () {
                                return content;
                            },
                            pid: function () {
                                return pid;
                            }
                        }
                    }).result
                }
            };
        })

        .controller("edit-content-modal.ctrl", function($scope, $modalInstance, content, pid, beProductApi) {
            $scope.close = $modalInstance.dismiss;
            $scope.content = content;
            $scope.type = Object.keys($scope.content)[0];

            $scope.ok = function () {
                beProductApi.editProduct(pid, $scope.content).then(function () {
                    $modalInstance.close({
                        content: $scope.content[$scope.type],
                        type: $scope.type
                    });
                });
            }
        })

    ;

})();