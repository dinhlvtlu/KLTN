"use strict";

(function () {

    angular.module("dw-backend.top-navigation", [
        ])

        .directive("topNavigation", function(displaySidebar, beSecurityService, User) {
            return {
                restrict: "E",
                templateUrl: "angular/top-navigation/top-navigation.html",
                link: function($scope, elem, attrs) {
                    displaySidebar.start();

                    $scope.logout = function () {
                        beSecurityService.logout();
                    };

                    $scope.User = User;
                }
            };
        })

    ;

})();