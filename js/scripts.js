// business logic
var currentPlayer = 0;

function player (startScore, startTurn) {
  this.score = startScore;
  this.turn = startTurn;
  this.turnScore = startTurnScore;

  if (score >= 100) {
    alert("winner");
  };
};

player.prototype.roll = function () {

}



// user interface
$(document).ready(function(){
  $("button#start").click(function(event){
    event.preventDefault();
    var start = $("#startButton").val();
    var reset = $("#resetButton").val();
    var hold = $("#holdButton").val();
    var roll = $("#rollButton").val();
  })

});
