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
        let kindergeld = 0;
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
