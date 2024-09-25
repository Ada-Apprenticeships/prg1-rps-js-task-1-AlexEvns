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



//if(player1 === player2) {return "draw"};

  //switch(player1) {
   // case "rock": 
     // return player2 === "scissors" || player2 === "lizard" ? "player1" : "player2";
    //case "paper": 
     // return player2 === "rock" || player2 === "spock" ? "player1" : "player2";
    //case "scissors": 
      //return player2 === "paper" || player2 === "lizard" ? "player1" : "player2";
    //case "lizard": 
      //return player2 === "spock" || player2 === "paper" ? "player1" : "player2";
    //case "spock": 
      //return player2 === "rock" || player2 === "scissors" ? "player1" : "player2";
  