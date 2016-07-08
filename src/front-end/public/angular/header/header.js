"use strict";

(function () {

    angular.module("dw.header", [
    ])

        .directive("dwHeader", function() {
            return {
                restrict: "E",
                templateUrl: "angular/header/header.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();