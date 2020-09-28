/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31

  http://www.imparareaprogrammare.it
*/

var giorniMese = prompt ('Inserisci il numero di giorni del mese');
var giornoSett = prompt ('Inserisci il numero corrispondente al giorno della settimana:' +'\n'+ '0 - Domenica' +'\n'+ '1 - Lunedì' +'\n'+ '2 - Martedì' +'\n'+ '3 - Mercoledì' +'\n'+ '4 - Giovedì' +'\n'+ '5 - Venerdì' +'\n'+ '6 - Sabato');
var acc1 = 0;

if (giorniMese >= 28 && giorniMese <= 31 && giornoSett >= 0 && giornoSett <7) { // Condizioni

for (var i = 1; i <= giorniMese; i++) { // Loop per i giorni del mese
    if (giornoSett == 7) { // Condizione che crea il loop per i giorni della settimana,
        giornoSett = 0; // quando il valore è uguale a 7, riparte dal case 0 (Domenica)
    }

giornoSett++; // Incremento del valore +1
acc1 = giornoSett -1; // L'accumulatore memorizza il valore del giorno della settimana partendo dal suo valore prima che sia sommato +1 (giornoSett++)

switch (acc1) {
    case 0:
    acc1 = 'Domenica';
        break;
    case 1:
    acc1 = 'Lunedì';
        break;
    case 2:
    acc1 = 'Martedì';
        break;
    case 3:
    acc1 = 'Mercoledì';
        break;
    case 4:
    acc1 = 'Giovedì';
        break;
    case 5:
    acc1 = 'Venerdì';
        break;
    case 6:
    acc1 = 'Sabato';
        break;

} // chiusura switch
console.log(i + ' ' +acc1);
} // chiusura for
} // chiusura if
else {
    alert ('Giorni inseriti non validi');
}

/*
  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

-------------------------------------------------------

var giorniMese = prompt ('Inserisci il nome del mese');
var giornoSett = prompt ('Inserisci il numero corrispondente al giorno della settimana:' +'\n'+ '0 - Domenica' +'\n'+ '1 - Lunedì' +'\n'+ '2 - Martedì' +'\n'+ '3 - Mercoledì' +'\n'+ '4 - Giovedì' +'\n'+ '5 - Venerdì' +'\n'+ '6 - Sabato');
var acc1 = 0;
var acc2 = 1;


if (giornoSett >= 0 && giornoSett <7) {

for (var i = 1; i <= acc2; i++) {

    switch (giorniMese) {
        case 'Gennaio':
        case 'Marzo':
        case 'Maggio':
        case 'Luglio':
        case 'Agosto':
        case 'Ottobre':
        case 'Dicembre':
            acc2 = 31;
            break;
        case 'Aprile':
        case 'Giugno':
        case 'Settembre':
        case 'Novembre':
            acc2 = 30;
            break;
        case 'Febbraio':
            acc2 = 28;
            break;
        default:
            alert ('Nome del mese non valido');

        }


    if (giornoSett == 7)
        giornoSett = 0;


giornoSett++;
acc1 = giornoSett -1;

switch (acc1) {
    case 0:
    acc1 = 'Domenica';
        break;
    case 1:
    acc1 = 'Lunedì';
        break;
    case 2:
    acc1 = 'Martedì';
        break;
    case 3:
    acc1 = 'Mercoledì';
        break;
    case 4:
    acc1 = 'Giovedì';
        break;
    case 5:
    acc1 = 'Venerdì';
        break;
    case 6:
    acc1 = 'Sabato';
        break;

}

console.log(i + ' ' +acc1);

} // chiusura for

} else {
    alert ('Giorno della settimana non valido');
}
*/
