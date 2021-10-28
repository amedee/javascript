window.onload = function () {
    document.querySelector('#deKnop').onclick = berekenDeling;
}

/**
 * Lees twee getallen in. Deel het grootste door het kleinste en toon het resultaat in het output element.
 * Ook negatieve getallen zijn toegelaten.
 * Herinner de gebruiker er aan dat je niet mag delen door 0. Waarschuw de gebruiker in een berichtenvenster.
 * We veronderstellen dat de input echt een getal is, valideren moet je nog niet doen.
 */
function berekenDeling () {
    let getal1 = parseInt(document.getElementById('getal1').value);
    let getal2 = parseInt(document.getElementById('getal2').value);
    if (getal1 === 0 || getal2 === 0) {
        alert('Ik kan niet delen door 0.'); // eslint-disable-line no-alert
        document.querySelector('#output').innerHTML = '';
    } else {
        document.querySelector('#output').innerHTML = deling(getal1, getal2).toString();
    }
}

/**
 * Deel het grootste getal door het kleinste getal.
 * Negatieve getallen zijn ook toegelaten.
 * @param {number} nGetal1 het eerste getal
 * @param {number} nGetal2 het tweede getal
 * @returns {number} het quotiënt
 */
function deling (nGetal1, nGetal2) {
    if (Math.abs(nGetal1) > Math.abs(nGetal2)) {
        return nGetal1 / nGetal2;
    }

    return nGetal2 / nGetal1;

}

module.exports = deling;
