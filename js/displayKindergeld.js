window.onload = function () {
    document.getElementById('deKnop').onclick = displayKindergeld;
};

function displayKindergeld () { // eslint-disable-line require-jsdoc
    let eKinderen = document.getElementById('kinderen');
    let eMaandloon = document.getElementById('maandloon');
    let eOutput = document.getElementById('output');

    let aantalKinderen = eKinderen.value;
    let maandloon = eMaandloon.value;
    let outputText = 'foo';

    if (aantalKinderen <= 0 || maandloon <= 0) {
        alert('Aantal kinderen en/of maandloon moeten meer dan 0 zijn'); // eslint-disable-line no-alert
    }
    eOutput.innerHTML = outputText;
}
