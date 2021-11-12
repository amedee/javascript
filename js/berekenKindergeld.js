window.onload = function () {
    document.getElementById('deKnop').onclick = displayKindergeld;
};

function displayKindergeld () { // eslint-disable-line require-jsdoc
    let eKinderen = document.getElementById('kinderen');
    let eMaandloon = document.getElementById('maandloon');
    let eOutput = document.getElementById('output');

    let aantalKinderen = eKinderen.value;
    let maandloon = eMaandloon.value;
    let outputText = '';

    if (aantalKinderen <= 0 || maandloon <= 0) {
        alert('Aantal kinderen en/of maandloon moeten meer dan 0 zijn'); // eslint-disable-line no-alert
    } else {
        let kindergeld = berekenKindergeld(aantalKinderen, maandloon);
        let kindString = 'kind';
        if (aantalKinderen > 1) {
            kindString = 'kinderen';
        }

        outputText = `
            Met een maandloon van ${maandloon}
            en ${aantalKinderen} ${kindString},
            heeft deze moeder recht op €${kindergeld} kindergeld.
        `
    }
    eOutput.innerHTML = outputText;
}

const defaultKindergeld = 25;
const toeslag3deKind = 12.5;
const toeslag5deKind = 7.5;
const lageLoongrens = 500;
const hogeLoongrens = 2000;

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
    if (maandloon <= lageLoongrens) {
        toeslagFactor = 1.25;
    }
    if (maandloon > hogeLoongrens) {
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
function berekenKindergeld (aantalKinderen, maandloon) {
    return round(Math.max(
        basisKindergeld(aantalKinderen) * toeslagFactorLoon(maandloon),
        defaultUitkering(aantalKinderen)
    ));
}
