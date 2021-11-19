/* Inserisci un numero, se è pari stampa il numero,
 se è dispari stampa il numero successivo. */


 let userNum = parseInt( prompt('Inserisci un numero: ') );
 if(userNum % 2 === 0) {
     alert('Il numero è pari: ' + userNum);
 }else{
     userNum = userNum + 1;
     alert('Il numero è dispari: ' + userNum);
 }
 