/**
 * Created by LeVan on 6/20/2016.
 */
module.exports = function (router, injector) {

    injector.run(function (Chucdanh) {
        router.get("/chucdanh", function (req, res) {
            Chucdanh.find({}, function (er, dschucdanh) {
                res.json(dschucdanh);
            })
        });
        router.post("/chucdanh", function (req, res) {
            Chucdanh.create(req.body, function (er, data) {
                res.json(data);
            })
        });
        router.delete("/chucdanh/:machucdanh",function(req,res){
            var x = req.params.machucdanh;
            console.log(x);
            Chucdanh.remove({machucdanh: req.params.machucdanh},function(err,dschucdanh){
                res.json(dschucdanh);
            })
        });
    })

};
