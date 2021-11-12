const deling = require('../js/deling');

describe('dividing larger number by smaller number', () => {
    test('divide 10 and 5 to equal 2', () => {
        expect(deling(10, 5)).toBe(2);
    });

    test('divide 5 and 10 to equal 2', () => {
        expect(deling(5, 10)).toBe(2);
    });

    test('divide -6 and 2 to equal -3', () => {
        expect(deling(-6, 2)).toBe(-3);
    });

    test('divide -3 and -6 to equal -2', () => {
        expect(deling(-3, -6)).toBe(2);
    });
});
