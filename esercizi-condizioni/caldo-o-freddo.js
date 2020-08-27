/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var Sun = 5;
var Mon = 8;
var Tue = 4;
var Wed = -2;
var Thu = 3;
var Fri = 7;
var Sat = 10;

console.log ( 'The hottest day is ' + Math.max(Sun, Mon, Tue, Wed, Thu, Fri, Sat) + ' degrees. The coldest day is ' + Math.min (Sun, Mon, Tue, Wed, Thu, Fri, Sat) + ' degrees.');
