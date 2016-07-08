"use strict";

(function () {

    angular.module("dw.gallery", [
    ])

        .directive("dwGallery", function() {
            return {
                restrict: "E",
                templateUrl: "angular/gallery/gallery.html",
                link: function($scope, elem, attrs) {

                }
            };
        })

    ;

})();