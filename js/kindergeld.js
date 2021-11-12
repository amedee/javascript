const defaultKindergeld = 25;

/**
 * @param {number} aantalKinderen Hoeveel kinderen heeft de moeder ten laste
 * @param {number} maandloon Wat is het maandloon van de moeder
 * @returns {number} Het kindergeld waar de moeder recht op heeft
 */
function berekenKindergeld (aantalKinderen, maandloon) { // eslint-disable-line no-unused-vars
    return defaultKindergeld * aantalKinderen;
}

module.exports = {berekenKindergeld}
