/**
 * Created by LeVan on 6/20/2016.
 */
module.exports = function (router, injector) {

    injector.run(function (Hocvi) {
        router.get("/hocvi", function (req, res) {
            Hocvi.find({}, function (er, dshocvi) {
                res.json(dshocvi);
            })
        });
        router.post("/hocvi", function (req, res) {
            Hocvi.create(req.body, function (er, data) {
                res.json(data);
            })
        });
        router.delete("/hocvi/:mahocvi",function(req,res){
            var x = req.params.mahocvi;
            console.log(x);
            Hocvi.remove({mahocvi: req.params.mahocvi},function(err,dshocvi){
               res.json(dshocvi);
           })
        });
    })

};
