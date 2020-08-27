/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

var week = prompt('Inserisci un valore corrispondente al giorno della settimana');

switch (week) {
  case '1':
    alert ('Lunedì');
    break;
  case '2':
    alert ('Martedì');
    break;
  case '3':
    alert ('Mercoledì');
    break;
  case '4':
    alert ('Giovedì');
    break;
  case '5':
    alert ('Venerdì');
    break;
  case '6':
    alert ('Sabato');
    break;
  case '7':
    alert ('Domenica');
    break;
  default:
    alert ('Nessuna corrispondenza');

}
