window.onload = function () {
    document.getElementById('deKnop').onclick = displayKindergeld;
};

function displayKindergeld () { // eslint-disable-line require-jsdoc
    let eKinderen = document.getElementById('kinderen');
    let eMaandloon = document.getElementById('maandloon');
    let eOutput = document.getElementById('output');

    let aantalKinderen = eKinderen.value; // eslint-disable-line no-unused-vars
    let maandloon = eMaandloon.value; // eslint-disable-line no-unused-vars
    let outputText = 'foo';

    eOutput.innerHTML = outputText;
}
