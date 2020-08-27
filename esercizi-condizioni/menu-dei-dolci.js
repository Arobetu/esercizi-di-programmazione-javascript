/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var a = '1';
var b = '2';
var c = '3';
var d = '4';

var q = prompt ('Per favore, seleziona il numero corrispondente al dessert che vuoi ordinare. \n\n Menù: \n 1. Pàrdulas \n 2. Seada \n 3. Mustatzolus \n 4. Pirichittus');

if (q===a) alert ('Hai ordinato Pàrdulas');
else if (q===b) alert ('Hai ordinato una Seada');
else if (q===c) alert ('Hai ordinato Mustatzolus');
else if (q===d) alert ('Hai ordinato Pirichittus');
else alert ('Il dessert che hai selezionato non è disponibile');
