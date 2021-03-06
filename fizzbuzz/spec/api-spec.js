'use strict';

var request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

var app = require('./../app');

describe('Authentication access ', function() {
    it('respond with status code 401', function(done) {
        request(app)
            .get('/')
            .expect(401, done);
    });
    it('respond with status code 401 with invalid user info', function(done) {
        request(app)
            .get('/')
            .expect(401, done);
    });
    it('respond with status 200 whith valid user info ', function(done) {
        request(app)
            .get('?userid=bob')
            .expect(200, done);
    });
});

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
