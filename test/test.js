var expect = require('chai').expect;
var numberFormatter = require('../index');

describe('Number Formatter', function() {
    it('it should convert single digits.', function() {
        var result = numberFormatter(1);
        expect(result).to.equal('1');
    });
    it('it should convert double digits', function() {
        var result = numberFormatter(12);
        expect(result).to.equal('12');
    });
    it('it should convert three digits', function() {
        var result = numberFormatter(123);
        expect(result).to.equal('123');
    });
    it('it should convert 4 numbers', function() {
        var result = numberFormatter(1234);
        expect(result).to.equal('1,234');
    });
    it('it should convert 5 numbers', function() {
        var result = numberFormatter(12345);
        expect(result).to.equal('12,345');
    });
    it('it should convert 6 numbers', function() {
        var result = numberFormatter(123456);
        expect(result).to.equal('123,456');
    });
    it('it should convert 7 digits', function() {
        var result = numberFormatter(1234567);
        expect(result).to.equal('1,234,567');
    });
    it('it should convert 8 digits', function() {
        var result = numberFormatter(12345678);
        expect(result).to.equal('12,345,678');
    });
})