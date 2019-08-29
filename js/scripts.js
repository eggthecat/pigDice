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
  this.score = 0
};

// Rolling dice
player.prototype.diceRoll = function() {
  var dice1 = Math.floor( Math.random() * 6 ) +1;
  this.roll = this.roll + dice1 + dice2;
    if ((dice1 === 1) || (dice2 === 1)) {
      this.roll = 0;
      changeTurn();
    }
}

//Score Keeping
// prototype for keeping scores
player.prototype.scoreRoll = function() {
  this.score = this.roll + this.score;
  this.roll = 0;
}
//adjusting player turn
function updateActivePlayer (inputRoster) {
  if (inputRoseter.activePlayer === (inputRoster.players.length -1)) {
    inputRoster.activePlayer = 0;
    console.log(inputRoster);
  } else {
    inputRoster.activePlayer += 1;
    console.log(inputRoster);
  }
}
function changeTurn() {
gamePlayers.players[gamePlayers.activePlayer].scoreRoll();
$('.player-score' + gamePlayers.activePlayer).text(gamePlayers.players[gamePlayers.activePlayer].score)
updateActivePlayer(gamePlayers);
}

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

// user interface
var gamePlayers = new PlayerRoster();
var newIDforPlayer = 0;

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
