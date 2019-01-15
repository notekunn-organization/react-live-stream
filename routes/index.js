const router = require("express").Router();
module.exports = function({ app }) {
    router.get('/', function(req, res) {
        res.render('index')
    })
    return router;
}
