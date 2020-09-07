/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
var Num1 = prompt ('Inserire il primo numero da calcolare');
var Num2 = prompt ('Inserire il secondo numero da calcolare');

var Calc = prompt ('Inserire il tipo di operazione da eseguire tra ' +Num1+ ' e ' + Num2 +'\n'+ 'somma'+'\n'+ 'sottrazione'+'\n'+ 'moltiplicazione'+'\n'+ 'divisione'+'\n'+ 'modulo'+'\n'+ 'potenza'+'\n'+ 'media');

switch (Calc) {
  case 'somma':
    console.log (parseInt(Num1)+ parseInt(Num2));
    break;
    case 'sottrazione':
      console.log (Num1-Num2);
      break;
      case 'moltiplicazione':
        console.log (Num1*Num2);
        break;
        case 'divisione':
          console.log (Num1/Num2);
          break;
          case 'modulo':
            console.log (Math.abs(Num1%Num2));
            break;
            case 'potenza':
              console.log (Num1**Num2);
              break;
              case 'media':
                console.log ((parseInt(Num1)+parseInt(Num2))/2);
                break;
  default:
console.log('inserire una operazione consentita');
}
