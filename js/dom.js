window.onload = function () {
    /* wijzig de titel */
    let eTitel = document.getElementById('kop'); // referentie naar node
    eTitel.innerHTML = 'De document tree';

    /* wijzig de tekst van het tweede list item */
    // eerst verwijderen we het tweede item
    let eBolletjes = document.getElementsByTagName('li');
    let e2deItem = eBolletjes[1]; // tweede item
    e2deItem.removeChild(e2deItem.childNodes[0]);

    // daarna creëren we een nieuw item en voegen dit in
    let sTekst = document.createTextNode('C#');
    e2deItem.appendChild(sTekst);

    /* een nieuw item invoegen achteraan de lijst */
    let eLijst = document.getElementsByTagName('ul')[0];
    let eItem = document.createElement('li');
    sTekst = document.createTextNode('Perl');
    eItem.appendChild(sTekst);
    eLijst.appendChild(eItem);

    /* attributen zetten en wijzigen */
    let eImg = document.getElementsByTagName('img')[0];
    eImg.src = 'images/elise.jpg';
    let sTooltip = 'Elise, system engineer';
    eImg.setAttribute('alt', sTooltip);
    eImg.setAttribute('title', sTooltip);

    /* Oefening 1 - tekst wijzigen */
    document.getElementsByTagName('p')[0].innerHTML += ' en <em>chocolade</em>';

    /* Oefening 2 - tekst met hyperlink toevoegen */
    let container = document.getElementById('container');
    let footerDiv = document.createElement('div');
    footerDiv.setAttribute('id', 'footer');

    let vdabLink = document.createElement('a');
    vdabLink.setAttribute('href', 'https://vdab.be');
    vdabLink.setAttribute('target', '_blank');
    let vdabLinkText = document.createTextNode('VDAB');
    vdabLink.appendChild(vdabLinkText);

    let footerParagraph = document.createElement('p');
    let text1 = document.createTextNode('Je vindt een job op de ');
    let text2 = document.createTextNode(' website');
    footerParagraph.appendChild(text1);
    footerParagraph.appendChild(vdabLink);
    footerParagraph.appendChild(text2);

    footerDiv.appendChild(footerParagraph);

    container.appendChild(footerDiv);

    /* Oefening 3 - console.log */
    let divs = document.getElementsByTagName('div');
    let divCount = divs.length;
    console.log('dit document bevat in totaal ' + divCount + ' div elementen'); // eslint-disable-line no-console

    /* Opdracht voor de coach */
    let scienceFictionLink = document.getElementById('sciencefiction');
    scienceFictionLink.setAttribute('href', 'https://google.com/search?q=science-fiction&tbm=isch');
    scienceFictionLink.setAttribute('target', '_blank');
}
