// business logic
// function for establishing array of players
function playerRoster() {
  this.players = [""];
  this.activePlayer = 0;
};

// prototype for adding a player
playerRoster.prototype.addPlayer = function(player) {
  this.players.push(player);
};
// constructor for player
function player(name, playerId) {
  this.name = name;
  this.playerID = newIDforPlayer +=1;
  this.roll = 0,
  this.score = 0,
};



// var diceRoll = Math.floor( Math.random() * 6 ) +1;
//
// var currentPlayer = 0;


//  player (startScore) {
//   this.score = startScore;
// };


// player.prototype.roll = function (startScore) {
//   function roll (min, max) {
//     return Math.random() * (max-min)+ min;
//     console.log(roll);

// press roll for random number
  //get random number in range
    // start if/else
    // if (roll ==! 1) {
    //if number is 1
      //lose all their turn score
        //swap players

    //if number is not > 1
      //add number to turn playerOneTurnScore/playerTwoTurnScore

    // press hold
      //store the random number
        // push random number into array for player score
          // adjust overall score

    // change player
      // repeat process of rolling dice


  // reset button
    // all scores are turned to 0
      // player 1 begins



  //   };
  // };

// user interface
$(document).ready(function(){
  $("button#restart").click(function(event){
    event.preventDefault();
    // var start = $("#startButton").val();
    var restart = $("#restartButton").val();
    var roll = $("#rollButton").val();
    var hold = $("#holdButton").val();

  });
});







function restart(){
  $(".playerScore").val(0);
  $(".turnScore").val(0);
}
