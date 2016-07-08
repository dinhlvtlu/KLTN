/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.api.khoa", [
    ])

        .factory("beKhoaApi", function(beApi) {
            return {
                getAllKhoa: function () {
                    return beApi.get("/be/api/khoa");
                },
                addKhoa: function (khoa) {
                    return beApi.post("/be/api/khoa", khoa);
                },
                removeKhoa: function(makhoa){
                    return beApi.delete("/be/api/khoa/" +makhoa);
                }
            };
        })

    ;

})();