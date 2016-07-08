"use strict";

(function () {

    angular.module("dw.application", [
    ])

        .directive("dwApplication", function() {
            return {
                restrict: "E",
                templateUrl: "angular/application/application.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();