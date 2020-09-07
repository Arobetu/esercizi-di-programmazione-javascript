/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var v = prompt ('Inserisci il voto in valore numerico');
var a = 'eccellente', b = 'ottimo', c = 'distinto', d = 'buono', e = 'sufficiente', f = 'insufficiente';

if (v < 18){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + f);
    } else if (v >= 18 && v < 21){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + e);
    } else if (v >= 21 && v < 24){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + d);
    } else if (v >= 24 && v < 27){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + c);
    } else if (v >= 27 && v <= 29){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + b);
    } else if (v == 30){
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + a);
}

/* Versione Switch-Case

var v = prompt ('Inserisci il voto in valore numerico');
var a = ('eccellente'), b = 'ottimo', c = 'distinto', d = 'buono', e = 'sufficiente', f = 'insufficiente';

switch (v) {
  case '30':
    console.log('Il voto ' + v + ' corrisponde al giudizio ' + a);
    break;
    case '27':
    case '28':
    case '29':
      console.log('Il voto ' + v + ' corrisponde al giudizio ' + b);
      break;
      case '24':
      case '25':
      case '26':
        console.log('Il voto ' + v + ' corrisponde al giudizio ' + c);
        break;
        case '21':
        case '22':
        case '23':
          console.log('Il voto ' + v + ' corrisponde al giudizio ' + d);
          break;
          case '18':
          case '19':
          case '20':
            console.log('Il voto ' + v + ' corrisponde al giudizio ' + e);
            break;
            case '15':
            case '16':
            case '17':
              console.log('Il voto ' + v + ' corrisponde al giudizio ' + f);
              break;
              default:
              console.log('Voto non valido');
}
*/
