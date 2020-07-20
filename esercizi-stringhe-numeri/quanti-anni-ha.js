/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var Year = prompt("Please enter the current year");
var Birth = prompt("Please enter your year of birth");

var Age = (Year-Birth);
console.log('you are' ,Age, 'years old');

var Undred = (100-Age);
console.log('you get left' ,Undred, 'years to be 100');
