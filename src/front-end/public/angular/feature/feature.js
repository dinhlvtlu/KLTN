"use strict";

(function () {

    angular.module("dw.feature", [
    ])

        .directive("dwFeature", function() {
            return {
                restrict: "E",
                templateUrl: "angular/feature/feature.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();