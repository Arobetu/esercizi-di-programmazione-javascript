/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var number = prompt ('Inserisci il numero di cui calcolare la tabellina: ' + '\n');
var accumulator = 0;

for (var i = 0; i <= 10; i++) {

  accumulator = (accumulator+ (i*number) + ' ');

} console.log(accumulator);
