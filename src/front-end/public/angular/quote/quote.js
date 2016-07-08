"use strict";

(function () {

    angular.module("dw.quote", [
    ])

        .directive("dwQuote", function() {
            return {
                restrict: "E",
                templateUrl: "angular/quote/quote.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();