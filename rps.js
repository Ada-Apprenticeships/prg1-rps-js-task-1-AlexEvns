function rockPaperScissors(player1, player2) {
  if(player1 === player2) {return "draw"}
  else {
    switch(player1) {
      case "rock": 
        return player2 === "scissors" || player2 === "lizard" ? "player1" : "player2";
      case "paper": 
        return player2 === "rock" || player2 === "spock" ? "player1" : "player2";
      case "scissors": 
        return player2 === "paper" || player2 === "lizard" ? "player1" : "player2";
      case "lizard": 
        return player2 === "spock" || player2 === "paper" ? "player1" : "player2";
      case "spock": 
        return player2 === "rock" || player2 === "scissors" ? "player1" : "player2";
    }
  }
  
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}