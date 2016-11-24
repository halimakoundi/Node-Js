'use strict';

const fizzbuzz = require('./fizzbuzz');
var express = require('express');
var app = express();

app.use(authenticate);
app.get('/fizz(buzz)/:number', function (req, res, next) {
    var generatedResult = fizzbuzz.generate(req.params.number) ;
    res.send('FizzBuzz generated: ' + "<br/>" + generatedResult + "<br/>" );

});

app.use(errorHandler);

function errorHandler (err, req, res, next) {
    res.status(500);
    console.error(err.stack);
    res.send('error');
}

function authenticate(req, res, next) {

    if(req.query.userid !== 'bob'){
        res.status(401);
        res.send("Authentication failed. Ask for a user name!");
        return;
    }
    next();
}

app.listen(3000, function () {
    console.log('The FizzBuzz app is listening on port 3000!');
});

module.exports = app;