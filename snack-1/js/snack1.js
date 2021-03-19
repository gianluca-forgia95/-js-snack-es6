/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

var bici = [
  {
    nome: 'Bianchi',
    peso: 2000
  },
  {
    nome:'Pininfarina',
    peso: 4000
  },
  {
    nome: 'Atala',
    peso: 3000

  }
];

var leggero = bici[0];
console.log(leggero);

for (var i = 0; i < bici.length; i++) {
  if (bici[i].peso < leggero.peso) {
        leggero = bici[i];
    }
}


  console.log(
  `
  La bici piu leggera è ${leggero.nome}
  `
);
