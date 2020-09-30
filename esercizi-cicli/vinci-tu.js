/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var roll1 = Math.floor (Math.random() * (6-1) + 1);
var roll2 = Math.floor (Math.random() * (6-1) + 1);
var roll3 = Math.floor (Math.random() * (6-1) + 1);

var roll4 = Math.floor (Math.random() * (6-1) + 1);
var roll5 = Math.floor (Math.random() * (6-1) + 1);
var roll6 = Math.floor (Math.random() * (6-1) + 1);

var Player1 = Math.abs (roll1 + roll2 + roll3);
var Player2 = Math.abs (roll4 + roll5 + roll6);

if (Player1 > Player2) {
    console.log('Player 1: ' + (roll1 +'-'+ roll2 +'-'+ roll3) + ', score: ' + Player1 +'\n'+ 'Player 2: ' + (roll4 +'-'+ roll5 +'-'+ roll6) + ', score: ' + Player2 +'\n'+ 'Player 1 WON')


    if (Player2 > Player1)
    console.log('Player 1: ' + (roll1 +' '+ roll2 +' '+ roll3) + ', score: ' + Player1 + '\n' + 'Player 2: ' + (roll4 +'-'+ roll5 +'-'+ roll6) + ', score: ' + Player2 + '\n' + 'Player 2 WON');

} else {
    console.log('Player 1: ' + Player1 + '\n' + 'Player 2: ' + Player2 + '\n' + 'TIE');
}
