/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.api.chucdanh", [
    ])

        .factory("beChucDanhApi", function(beApi) {
            return {
                getAllChucDanh: function () {
                    return beApi.get("/be/api/chucdanh");
                },
                addChucDanh: function (chucdanh) {
                    return beApi.post("/be/api/chucdanh", chucdanh);
                },
                removeChucDanh: function(machucdanh){
                    return beApi.delete("/be/api/chucdanh/" +machucdanh);
                }
            };
        })

    ;

})();