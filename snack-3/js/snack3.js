/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/
//ES5
/*
function arrayInterval( array, a, b) {
  var arrayFunc = [];
  for (let i = a ; i <= b && i < array.length; i++) {
    arrayFunc.push(array[i]);
  }
 return arrayFunc;
}

const listNumber = [ 1, 2, 3, 4, 5, 6, 7];

const newListNumber = arrayInterval( listNumber, 2, 6);

console.log(newListNumber);
*/
//ES6 filter
var min = parseInt(prompt('Inserisci un numero tra 1 e 8'));
var max = parseInt(prompt('Inserisci un numero tra 1 e 8'));



const list = [1,2,3,4,5,6,7,8];

//const list2 = newList(1, 7, list);

const list2 = list.filter((item, index) => {
  return  item = min && item <= max;
});

console.log(list2);
