/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1;
let n2;
n1 = 5;
n2 = 10;
if(n1>n2){
  console.log("il numero piu grande è", n1)
}
else{
  console.log("il numero piu grande è", n2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let n3 = 30;
if(n3 != 5){
  console.log("Not equal");
}
else{
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let n4 = 20;
if(n4%5 === 0){
  console.log("divisibile per 5")
}
else{
  console.log(" non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let n5 = 27;
let n6 = 35;

console.log(n5||n6 !== 8,);
console.log(n6 - n5 === 8,);


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

 /*let saldo = prompt("indica il tuo saldo attuale");
 if(saldo>=50){
  console.log("La spedizione è gratuita")
 }
 else{
  console.log("la spedizione ha un costo di 10 $")
 } */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let importoScontato;
let saldo = prompt("Buon Black Friday! Indica il tuo saldo attuale");
console.log(saldo)
console.log("Il saldo senza sconto è",saldo)
let sconto = (saldo * 0,20);
console.log("Lo sconto è di",sconto)
importoScontato= saldo - sconto;
console.log("Il tuo prodotto scontato costerà",importoScontato)

 if(importoScontato>=50){
  console.log("La spedizione è gratuita")
 }
 else{
  console.log("la spedizione ha un costo di 10 $")
 }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let var1= 10
let var2= 30
let var3= 50
if(var1 && var2 > var3){
  if(var1>var2){
    console.log(var1)
    console.log(var2)
    console.log(var3)
  }
  else{
      console.log(var2)
      console.log(var1)
      console.log(var3)
    }

    }
else{ 
  if(var2>var1){
    console.log(var3)
    console.log(var2)
    console.log(var1)
  }
  else{
    console.log(var3)
    console.log(var1)
    console.log(var2)
  }
  }


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let num10 = 5;
if(typeof num10 === 'number'){
  console.log("il valore indicato è un numero")
}
else{
  console.log("il valore indicato non è un numero")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero1 = prompt("inserisci un numero");
if(numero1%2 === 0){
  console.log("Il numero fornito è pari")
}
else{
  console.log("il numero fornito è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

  let val = 7
  if (val < 5) {
    console.log("Meno di 5");
    } else if (val => 10) {
      console.log("Uguale a 10 o maggiore");
    } else {
      console.log("Meno di 10");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city ="Toronto"
delete me.lastName;
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/




/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

 me.skills.pop();
console.log(me.skills)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri=[];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);

console.log(numeri)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.splice(9,1,100)
