// let v = Number(prompt('Inserisci il tuo voto'));

// if (v < 18){console.log ('Insufficiente')}
// else if (v >= 18 && v < 21){console.log ('Sufficiente')}
// else if (v >= 21 && v < 24){console.log ('Buono')}
// else if (v >= 24 && v < 27){console.log ('Distinto')}
// else if (v >= 27 && v <= 29){console.log ('Ottimo')}
// else if (v == 30){console.log ('Eccellente')}
// else {console.log('Voto non valido')
// }
let voto = 30;
let giudizio;

switch (true) {
    case voto < 18:
    giudizio = 'Insufficiente'
    break;
    case voto >= 18 && voto < 21:
    giudizio = 'Sufficiente';
    break;
    case voto >= 21 && voto < 24:
    giudizio = 'Buono';
    break;
    case voto >= 24 && voto < 27:
    giudizio = 'Distinto';
    break;
    case voto >= 27 && voto <= 29:
    giudizio = 'Ottimo';
        break;
    case voto == 30:
    giudizio = 'Eccellente';
        break;
        default:
    giudizio = 'Voto non valido';
        break;
}
console.log(giudizio);
