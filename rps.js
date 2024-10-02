const ruleSet = {
  rock: {beats: ["scissors", "lizard"],},
  scissors: {beats: ["paper", "lizard"]},
  paper: {beats: ["rock", "spock"]},
  lizard: {beats: ["spock", "paper"]},
  spock: {beats: ["rock", "scissors"]}      
}

function rockPaperScissors(player1, player2) {
  if(player1 === player2) {return "draw"};

  if(ruleSet[player1].beats.includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}
  
// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}