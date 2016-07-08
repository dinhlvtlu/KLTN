"use strict";

(function () {

    angular.module("dw.picture-info", [
    ])

        .directive("dwPictureInfo", function() {
            return {
                restrict: "E",
                templateUrl: "angular/picture-info/picture-info.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();