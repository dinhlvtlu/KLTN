"use strict";

(function () {

    angular.module("dw-backend.api.product", [
    ])

        .factory("beProductApi", function(beApi) {
            return {
                addNewProduct: function (prod) {
                    return beApi.post("/be/api/product", prod);
                },
                getAllProduct: function () {
                    return beApi.get("/be/api/product");
                },
                editProduct: function (pid, content) {
                    return beApi.put("/be/api/product/" + pid, content);
                }
            };
        })

    ;

})();