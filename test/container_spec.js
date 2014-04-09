/// <reference path="../src/container.js"/>
var should = require('should'),
	Container = require('../src/container').Container;

describe('Container', function () {
    describe('#ctor', function() {

        describe('default', function () {
            it('should have a name of Stem', function () {
                var container = new Container;
                container.name().should.equal('Stem');
            });

            it('should have a quantity of 1', function () {
                var container = new Container;
                container.quantity().should.equal(1);
            });

            it('should have a total of 1', function () {
                var container = new Container;
                container.total().should.equal(1);
            });

            it('should have a null unit', function () {
                var container = new Container;
                should.not.exist(container.unit());
            });
        });

        describe('with params', function () {
            it('should set the properties', function () {
                var unit = new Container,
                    container = new Container('Truck', 20, unit);

                container.name().should.equal('Truck');
                container.quantity().should.equal(20);
                container.unit().should.exactly(unit);
            });
        });
    });

    describe('#total()', function () {
        it('should multiply by the unit\'s total', function () {
            var pail = new Container('Pail', 50);
            pail.total().should.equal(50);

            var cart = new Container('Cart', 10, pail);
            cart.total().should.equal(500);
        });
    });
});