/**
 * Created by Tianyou on 2017/3/30.
 */

var express = require('express');
var router = express.Router();

var monk = require('monk');
//var db = monk('localhost:27017/vidzy');
var db = monk('141.140.193.179:27017/vidzy');

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
