// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
 
const userArray = [];

let somma = 0;



while (somma < 50) {
    const userNum = parseInt(prompt('Inserisci  un numero'));

    userArray.push(userNum);
    console.log(userNum);
    somma += userNum;
}

alert('La soluzione  è ' + somma);