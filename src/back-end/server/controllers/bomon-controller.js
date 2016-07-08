/**
 * Created by LeVan on 6/20/2016.
 */
module.exports = function (router, injector) {

    injector.run(function (Bomon) {
        router.get("/bomon", function (req, res) {
            Bomon.find({}, function (er, dsbomon) {
                res.json(dsbomon);
            })
        });
        router.post("/bomon", function (req, res) {
            Bomon.create(req.body, function (er, data) {
                res.json(data);
            })
        });
        router.delete("/bomon/:mabomon",function(req,res){
            var x = req.params.mabomon;
            Bomon.remove({mabomon: req.params.mabomon},function(err,dsbomon){
                res.json(dsbomon);
            })
        });
    })

};
