let eKnop = document.querySelector('#goKnop');
eKnop.onclick = evalueer;

/**
 * Evalueer of een student geslaagd is of niet.
 */
function evalueer () {
    // de invulvelden zijn objecten

    let eWiskunde = document.getElementById('wiskunde');
    let eBoekhouden = document.getElementById('boekhouden');
    let eInformatica = document.getElementById('informatica');
    // de punten

    let nWisk = parseInt(eWiskunde.value);
    let nBoek = parseInt(eBoekhouden.value);
    let nInfr = parseInt(eInformatica.value);
    let nTotl = nWisk + nBoek + nInfr;

    let nGmid = nTotl / 3;
    // de evaluatie

    let sBericht = 'U bent';
    if ((nWisk >= 6 && nBoek + nInfr >= 12) || nInfr === 10) {
        sBericht += ' geslaagd';
        if (nGmid >= 7) {
            sBericht += ' met onderscheiding';
        } else {
            sBericht += ' met voldoening';
        }
    } else {
        sBericht += ' NIET geslaagd';
    }

    // output naar div
    let eOutput = document.querySelector('#output');
    eOutput.innerHTML = sBericht;
}
