/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
  {
    nome: 'Bianchi',
    peso: 10
  },
  {
    nome:'Pininfarina',
    peso: 40
  },
  {
    nome: 'Atala',
    peso: 30

  }
];

let biciLeggera = null;

for (let i = 0; i < bici.length; i++) {

  if ( biciLeggera == null || biciLeggera.peso > bici[i].peso ) {
    biciLeggera = bici[i];
  }
}

const {nome, peso} = biciLeggera;
console.log(` la bici leggera è  ${nome} infatti pesa ${peso} kg` );
