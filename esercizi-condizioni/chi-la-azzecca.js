/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var RandomNumber = Math.floor (Math.random() * (100-1) + 1);

var Player1 = prompt ('Giocatore 1:' +'\n'+ 'Inserisci un numero tra 1 e 100');
var Player2 = prompt ('Giocatore 2:' +'\n'+ 'Inserisci un numero tra 1 e 100');

var difOne = Math.abs (RandomNumber-Player1);
var difTwo = Math.abs (RandomNumber-Player2);

if (Player1 === RandomNumber) {
          alert ('Numero uscito = ' + RandomNumber + '. Il giocatore 1 ha indovinato il numero');
          if (Player2 === RandomNumber){
          alert ('Numero uscito = ' + RandomNumber + '. Il giocatore 2 ha indovinato il numero');
          if (Player1 > 100 || Player2 > 100){
          alert ('Il numero inserito non deve superare 100, ricarica la pagina');
}}}else { alert ('Nessun giocatore ha indovinato il numero ' + RandomNumber);
}

if (difOne < difTwo) {
document.write ('Il giocatore 1 ha scelto ' + Player1 +'<br/>'+ 'Il giocatore 2 ha scelto ' + Player2 +'<br/>'+ 'Il numero da indovinare era ' + RandomNumber +'<br/>'+ 'Il giocatore 1 si è avvicinato di più al risultato');
} else if (Player1 > 100 || Player2 > 100){
  document.write ('Premi F5 per giocare di nuovo');
} else {
document.write ('Il giocatore 1 ha scelto ' + Player1 +'<br/>'+ 'Il giocatore 2 ha scelto ' + Player2 +'<br/>'+ 'Il numero da indovinare era ' + RandomNumber +'<br/>'+ 'Il giocatore 2 si è avvicinato di più al risultato');
}
