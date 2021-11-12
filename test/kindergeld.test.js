const {berekenKindergeld} = require('../js/kindergeld');

describe('Berekening kindergeld', () => {

    it.each`
    aantalKinderen | maandloon | kindergeld
    ${1}           | ${1000}   | ${25}
    ${2}           | ${1000}   | ${50}
    ${3}           | ${1000}   | ${87.5}
    ${4}           | ${1000}   | ${125}
  `('should return $kindergeld for $aantalKinderen children and $maandloon income', ({
        aantalKinderen, maandloon, kindergeld
    }) => {
        expect(berekenKindergeld(aantalKinderen, maandloon)).toEqual(kindergeld);
    });

    it('should be verified with the previous snapshot', () => {
        expect(berekenKindergeld).toVerifyAllCombinations(
            [1, 2, 3, 4],
            [1000]
        );
    });

});
