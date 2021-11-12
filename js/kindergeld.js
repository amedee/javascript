const defaultKindergeld = 25;
const toeslag3deKind = 12.5;
const toeslag5deKind = 7.5;

let defaultUitkering = aantalKinderen =>
    defaultKindergeld * aantalKinderen;
let uitkeringVanafDerdeKind = aantalKinderen =>
    toeslag3deKind * Math.max(aantalKinderen - 2, 0);
let uitkeringVanafVijfdeKind = aantalKinderen =>
    toeslag5deKind * Math.max(aantalKinderen - 4, 0);
let basisKindergeld = aantalKinderen =>
    defaultUitkering(aantalKinderen) +
    uitkeringVanafDerdeKind(aantalKinderen) +
    uitkeringVanafVijfdeKind(aantalKinderen);
let toeslagFactorLoon = maandloon => {
    let toeslagFactor = 1;
    if (maandloon <= 500) {
        toeslagFactor = 1.25;
    }
    if (maandloon > 2000) {
        toeslagFactor = 0.55;
    }

    return toeslagFactor;
};

let round = num =>
    Math.round(Number((Math.abs(num) * 100).toPrecision(15))) / 100 * Math.sign(num);

/**
 * @param {number} aantalKinderen Hoeveel kinderen heeft de moeder ten laste
 * @param {number} maandloon Wat is het maandloon van de moeder
 * @returns {number} Het kindergeld waar de moeder recht op heeft
 */
let berekenKindergeld = (aantalKinderen, maandloon) =>
    round(Math.max(
        basisKindergeld(aantalKinderen) * toeslagFactorLoon(maandloon),
        defaultUitkering(aantalKinderen)
    ));

module.exports = {berekenKindergeld}
