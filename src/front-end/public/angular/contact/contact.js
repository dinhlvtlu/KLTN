"use strict";

(function () {

    angular.module("dw.contact", [
    ])

        .directive("dwContact", function() {
            return {
                restrict: "E",
                templateUrl: "angular/contact/contact.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();