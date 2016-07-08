"use strict";

(function () {

    angular.module("dw.option-starts", [
    ])

        .directive("dwOptionStarts", function() {
            return {
                restrict: "E",
                templateUrl: "angular/option-starts/option-starts.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();