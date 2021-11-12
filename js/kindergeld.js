const defaultKindergeld = 25;
const toeslag3deKind = 12.5;
const toeslag5deKind = 7.5;

/**
 * @param {number} aantalKinderen Hoeveel kinderen heeft de moeder ten laste
 * @param {number} maandloon Wat is het maandloon van de moeder
 * @returns {number} Het kindergeld waar de moeder recht op heeft
 */
function berekenKindergeld (aantalKinderen, maandloon) { // eslint-disable-line no-unused-vars
    return (defaultKindergeld * aantalKinderen) +
        (toeslag3deKind * Math.max(aantalKinderen - 2, 0)) +
        (toeslag5deKind * Math.max(aantalKinderen - 4, 0));
}

module.exports = {berekenKindergeld}
