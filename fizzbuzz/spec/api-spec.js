'use strict';

var request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

var app = require('./../app');

describe('GET /fizzbuzz', function() {
    it('respond with status code 200', function(done) {
        request(app)
            .get('/fizzbuzz/3?userid=bob')
            .expect(200, done);
    });
    it('respond with status type 2', function(done) {
        request(app)
            .get('/fizzbuzz/3?userid=bob')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.statusType).to.eql(2);
                done();
            });

    });
});
