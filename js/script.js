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
});

document.getElementById('btn-annulla').addEventListener('click', function () {
    document.getElementById('name-field').value = '';
    document.getElementById('km-field').value = '';
    document.getElementById('age-field').value = '';
});