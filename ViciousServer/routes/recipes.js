

var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('viciousdelicious:cake50@ds155080.mlab.com:55080/heroku_xdjx3gtb');

router.get('/api/recipes', function(req, res) {
    var collection = db.get('recipes');
    collection.find({}, function(err, recipes){
        if (err) throw err;
        res.json(recipes);
    });
});

router.post('/api/reviews', function(req, res) {

    var collection = db.get('recipes');
    collection.create({
        title : req.body.title,
        img : req.body.img,
        done : false
    }, function(err, recipe) {
        if (err)
            res.send(err);

        // get and return all the reviews after you create another
        collection.find(function(err, recipes) {
            if (err)
                res.send(err)
            res.json(recipes);
        });
    });

});

router.delete('/api/recipes/:recipe_id', function(req, res) {

    var collection = db.get('recipes');
    collection.remove({
        _id : req.params.recipe_id
    }, function(err, recipe) {

    });
});

module.exports = router;
