
module.exports = function (router, injector) {

    injector.run(function (Product) {

        router.get("/product", function (req, res) {
            Product.find({}, function (er, prods) {
                res.json(prods);
            }) 
        });
        
        router.post("/product", function (req, res) {
            Product.create(req.body, function (er, data) {
                res.json(data);
            })
        });

        router.put("/product/:pid", function (req, res) {
            Product.findOneAndUpdate({_id: req.params.pid}, req.body, function (er) {
                res.end();
            })
        });

    })

};