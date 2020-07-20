/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var Value = prompt ("insert the number of seconds");

var Hours = Math.floor (Value/3600)%60;
var Minutes = Math.floor (Value/60)%60;
var Seconds = Math.floor (Value%60);


console.log(Hours +'hours',Minutes +'minutes',Seconds +'seconds');
