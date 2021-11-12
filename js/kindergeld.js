const defaultKindergeld = 25;
const toeslag3deKind = 12.5;
const toeslag5deKind = 7.5;

let defaultUitkering = aantalKinderen =>
    defaultKindergeld * aantalKinderen;
let uitkeringVanafDerdeKind = aantalKinderen =>
    toeslag3deKind * Math.max(aantalKinderen - 2, 0);
let uitkeringVanafVijfdeKind = aantalKinderen =>
    toeslag5deKind * Math.max(aantalKinderen - 4, 0);

/**
 * @param {number} aantalKinderen Hoeveel kinderen heeft de moeder ten laste
 * @param {number} maandloon Wat is het maandloon van de moeder
 * @returns {number} Het kindergeld waar de moeder recht op heeft
 */
function berekenKindergeld (aantalKinderen, maandloon) {
    let toeslagLoon = 1;
    if (maandloon <= 500) {
        toeslagLoon = 1.25;
    }

    return (defaultUitkering(aantalKinderen) +
        uitkeringVanafDerdeKind(aantalKinderen) +
        uitkeringVanafVijfdeKind(aantalKinderen)) * toeslagLoon;
}

module.exports = {berekenKindergeld}
