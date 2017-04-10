/**
 * Created by Tianyou on 2017/3/30.
 */

var express = require('express');
var router = express.Router();

var monk = require('monk');
//var db = monk('localhost:27017/vidzy');
var db = monk('141.140.193.179:27017/vidzy');

router.get('/', function(req, res) {
    var collection = db.get('recipes');
    collection.find({}, function(err, recipes){
        if (err) throw err;
        res.json(recipes);
    });
});

module.exports = router;
