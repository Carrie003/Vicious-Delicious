/**
 *
 * @type {any}
 */

var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('viciousdelicious:cake50@ds155080.mlab.com:55080/heroku_xdjx3gtb');

/**
 * Makes a call to gather all available recipes
 */
router.get('/api/recipes', function(req, res) {
    var collection = db.get('recipes');
    collection.find({}, function(err, recipes){
        if (err) throw err;
        res.json(recipes);
    });
});

/**
 * Gets recipe from the database and stores it in variable called collections
 * TODO Needs futher comments to explain it's function
 */
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

/**
 * Delete function is not in use at the moment
 * Why? We do not want the user to have the power to delete any recipes, only the ones
 * they have added themselves
 *
 * POTENTIAL FUTURE FEATURE
 */
router.delete('/api/recipes/:recipe_id', function(req, res) {

    var collection = db.get('recipes');
    collection.remove({
        _id : req.params.recipe_id
    }, function(err, recipe) {

    });
});

module.exports = router;
