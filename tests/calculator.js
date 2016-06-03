var mocha = require('mocha');
var expect = require('chai').expect;
var calculator = require('../src/calculator');

describe('Calculator', function () {

    it('can add two numbers', function () {
        expect(calculator.add(2, 3)).to.eql(5);
        expect(calculator.add(2, 2)).to.eql(4);
        expect(calculator.add(-2, 2)).to.eql(0);
    });

    it('can subtract two numbers', function () {
        expect(calculator.subtract(6, 3)).to.eql(3);
        expect(calculator.subtract(9, 7)).to.eql(2);
        expect(calculator.subtract(-10, -5)).to.eql(-5);
    });

    it('can multiply two numbers', function () {
        expect(calculator.multiply(3, 5)).to.eql(15);
        expect(calculator.multiply(2, 9)).to.eql(18);
        expect(calculator.multiply(4, -10)).to.eql(-40);
    });
});
