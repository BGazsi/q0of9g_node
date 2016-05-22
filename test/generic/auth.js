var expect = require('chai').expect;
var authMW = require('../../middleware/generic/auth');

describe('auth middleware ', function () {
    describe('should call next when', function () {

        it('the session object has a userid', function (done) {
            var req = {
                session: {
                    userid: 'fakeuserid'
                }
            };
            authMW({

            })(req, {}, function (err) {
                expect(err).to.eql(undefined);
                done();
            });
        });
    });
    describe('should return error when', function () {

        it('the session object does not have a userid', function (done) {
            var req = {
                session: {}
            };
            var res = {
                tpl: {
                    error: []
                }
            };
            authMW({

            })(req, res, function (err) {
                expect(err).to.eql(undefined);
                expect(res.tpl.error.length).to.be.above(0);
                done();
            });
        });
    });
});