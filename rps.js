const ruleSet = {
  rock: {beats: ["scissors", "lizard"],},
  scissors: {beats: ["paper", "lizard"]},
  paper: {beats: ["rock", "spock"]},
  lizard: {beats: ["spock", "paper"]},
  spock: {beats: ["rock", "scissors"]}      
}

function rockPaperScissors(player1Choice, player2Choice) {
  if(player1Choice === player2Choice) return "draw";

  if(ruleSet[player1Choice].beats.includes(player2Choice)) {
    return "player1";
  } else {
    return "player2";
  }
}
  
// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}