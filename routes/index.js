var express = require('express');
var router = express.Router();
var knex = require('../connection')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/beer', function(req, res, next) { //server receives request, sends back response (res) to the client
    console.log(req.body);
    var newBeer = {
        // id: puppies.length,
        "date": req.body.date,
        "name": req.body.name,
        "style": req.body.style,
        "method": req.body.method,
        "abv": req.body.abv,
        "niceLabel": req.body.niceLabel,
        "slammability": req.body.slammability,
        "brewery": req.body.brewery,
        "location": req.body.location,
        "myRating": req.body.myRating,
        "thoughts": req.body.thoughts
    }
    knex('beer').insert(newBeer).then(function() {
        res.json(newBeer);
    })
})

module.exports = router;
