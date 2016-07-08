/**
 * Created by LeVan on 6/20/2016.
 */
module.exports = function (router, injector) {

    injector.run(function (Khoa) {
        router.get("/khoa", function (req, res) {
            Khoa.find({}, function (er, dskhoa) {
                res.json(dskhoa);
            })
        });
        router.post("/khoa", function (req, res) {
            Khoa.create(req.body, function (er, data) {
                res.json(data);
            })
        });
        router.delete("/khoa/:makhoa",function(req,res){
            var x = req.params.makhoa;
            console.log(x);
            Khoa.remove({makhoa: req.params.makhoa},function(err,dskhoa){
                res.json(dskhoa);
            })
        });
    })

};
