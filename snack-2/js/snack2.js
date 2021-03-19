/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
function getRandomNumber(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const teams = [
  {
    nome: 'Roma',
    punti: 0,
    falli: 0
  },
  {
    nome: 'Sampdoria',
    punti: 0,
    falli: 0
  },
  {
    nome: 'Palermo',
    punti: 0,
    falli: 0
  },
];

for (let i = 0; i < teams.length; i++) {
 teams[i].punti = getRandomNumber(1, 80);
 teams[i].falli = getRandomNumber(1, 30);

}

console.log(teams);

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
  const {nome, falli, punti} = teams[i];

  newTeams.push(
    {
      nome,
      falli
    }
    
  );
}
console.log(newTeams);
