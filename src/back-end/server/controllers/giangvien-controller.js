/**
 * Created by LeVan on 6/20/2016.
 */
module.exports = function (router, injector) {

    injector.run(function (Giangvien) {
        router.get("/giangvien", function (req, res) {
            Giangvien.find({}, function (er, dsmagiangvien) {
                res.json(dsmagiangvien);
            })
        });
        router.post("/giangvien", function (req, res) {
            Giangvien.create(req.body, function (er, data) {
                res.json(data);
            })
        });
        router.delete("/giangvien/:magiangvien",function(req,res){
            var x = req.params.magiangvien;
            Giangvien.remove({magiangvien: req.params.magiangvien},function(err,dsmagiangvien){
                res.json(dsmagiangvien);
            })
        });
    })

};
