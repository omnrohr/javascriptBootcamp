///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number 
(Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  },
};

/*
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const [...allPlayers] = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1: team11, x: drwa1, team2: team22 },
} = game;

game.printGoals('player1', 'player2');
console.log(team11, drwa1, team22);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');
const days = Object.keys(game.odds);
console.log(days);
*/

// Odd of teamname : 1.33
// Odd of draw: 3.25
// Odd of teamname : 6.5

for (const [name, score] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[name] ?? 'Draw'}: ${score}`);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/*
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}.`);
}

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}.`);
}

const [...ind] = game.scored.entries();
console.log(ind);

*/

/*
const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const v of odds) average += v;
average /= odds.length;
console.log(average);
*/

// let average = 0;
// for (const valu of Object.values(game.odds)) {
//   average += valu;
// }
// console.log(average);

// const ave = [...Object.values(game.odds)];
// console.log(ave);
