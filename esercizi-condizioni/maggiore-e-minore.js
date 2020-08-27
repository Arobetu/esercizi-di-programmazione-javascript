/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/


var a = prompt ('Insert first number');
var b = prompt ('insert second number');
var c = prompt ('Insert third number');
var d = prompt ('Insert fourth number');

alert ('the bigger number is ' + Math.max (a, b, c, d));
alert ('the smaller number is ' + Math.min (a, b, c, d));

//document.write ('the bigger number is ' + Math.max (a, b, c, d) + ' the smaller number is ' + Math.min (a, b, c, d));
