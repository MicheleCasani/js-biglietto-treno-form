//metto tutto all'interno di un evento click in modo che viene letto dalla console solo se premutoil bottone
document.getElementById('btn-genera').addEventListener('click', function () {
    // Prendo i valori dal form
    let name = document.getElementById('name-field').value;
    let km = parseFloat(document.getElementById('km-field').value);
    let age = document.getElementById('age-field').value;

    // Calcolo del prezzo base
    let price = km * 0.21;
    let finalPrice = price;

    // Applico gli sconti in base all'età
    if (age === 'under-18') {
        finalPrice = finalPrice * 0.8;
    } else if (age === 'over-65') {
        finalPrice = finalPrice * 0.6;
    }

    // Formattazione finale del prezzo
    finalPrice = finalPrice.toFixed(2);

    // Stampa il prezzo finale in console
    console.log(finalPrice);

    //aggiungo i dati alla lista del ticket
    document.getElementById('name-ticket').innerText = ' ' + name;
    if (age === 'under-18') {
        document.getElementById('offer-ticket').innerText = ' sconto minorenni';
    }
    else if (age === 'over-65') {
        document.getElementById('offer-ticket').innerText = ' sconto over 65';
    }
    else {
        document.getElementById('offer-ticket').innerText = ' prezzo standard';
    }
    document.getElementById('price-ticket').innerText = ' ' + finalPrice + ' €';
    document.getElementById('carrage-ticket').innerText = ' 5';
    document.getElementById('code-ticket').innerText = ' 92911';

});

//permetto al tasto annulla di resettare i campi inserendo un evento click che resetta i campi
document.getElementById('btn-annulla').addEventListener('click', function () {
    document.getElementById('name-field').value = ' ';
    document.getElementById('km-field').value = ' ';
    document.getElementById('age-field').value = ' ';
});