// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numArray = [10, 8, 20, 8, 4, 43];

let somma = 0;


for (let i= 0; i < numArray.length; i++) {

    const thisNum = numArray[i];
    if (i % 2 !== 0) {
        somma += thisNum;
    }
}
console.log(somma);
  