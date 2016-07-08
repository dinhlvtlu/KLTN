/**
 * Created by LeVan on 6/18/2016.
 */
"use strict";

(function () {

    angular.module("dw-backend.api.giangvien", [
    ])

        .factory("beGiangVienApi", function(beApi) {
            return {
                getAllGiangVien: function () {
                    return beApi.get("/be/api/giangvien");
                },
                addGiangVien: function (giangvien) {
                    return beApi.post("/be/api/giangvien", giangvien);
                },
                removeGiangVien: function(magiangvien){
                    return beApi.delete("/be/api/giangvien/" +magiangvien);
                }
            };
        })

    ;

})();