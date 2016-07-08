"use strict";

(function () {

    angular.module("dw-backend.sidebar-menu", [
    ])

        .directive("sideBarMenu", function($state) {
            return {
                restrict: "E",
                templateUrl: "angular/sidebar-menu/sidebar-menu.html",
                link: function($scope, elem, attrs) {
                    $scope.$state = $state;
                }
            };
        })

    ;

})();