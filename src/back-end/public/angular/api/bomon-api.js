/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.api.bomon", [
    ])

        .factory("beBoMonApi", function(beApi) {
            return {
                getAllBoMon: function () {
                    return beApi.get("/be/api/bomon");
                },
                addBoMon: function (bomon) {
                    return beApi.post("/be/api/bomon", bomon);
                },
                removeBoMon: function(mabomon){
                    return beApi.delete("/be/api/bomon/" +mabomon);
                }
            };
        })

    ;

})();