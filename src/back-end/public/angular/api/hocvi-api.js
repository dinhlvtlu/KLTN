/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.api.hocvi", [
    ])

        .factory("beHocViApi", function(beApi) {
            return {
                getAllHocVi: function () {
                    return beApi.get("/be/api/hocvi");
                },
                addHocVi: function (hocvi) {
                    return beApi.post("/be/api/hocvi", hocvi);
                },
                removeHocVi: function(mahocvi){
                    return beApi.delete("/be/api/hocvi/" +mahocvi);
                }
            };
        })

    ;

})();