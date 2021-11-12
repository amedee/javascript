const {berekenKindergeld} = require('../js/kindergeld');

describe('Berekening kindergeld', () => {

    it.each`
    aantalKinderen | maandloon | kindergeld
    ${1}           | ${1000}   | ${25}
  `('should return $kindergeld for $aantalKinderen children and $maandloon income', ({
        aantalKinderen, maandloon, kindergeld
    }) => {
        expect(berekenKindergeld(aantalKinderen, maandloon)).toEqual(kindergeld);
    });

    it('should be verified with the previous snapshot', () => {
        expect(berekenKindergeld).toVerifyAllCombinations(
            [1],
            [1000]
        );
    });

});