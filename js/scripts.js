// business logic
function player (startScore, startTurn) {
  this.score = startScore;
  this.turn = startTurn;
  if (score > 100) {
    alert ("winner");
  };
};

player.prototype.roll = function () {

}



// user interface
$(document).ready(function(){
  $("button#start").click(function(event){
    event.preventDefault();
    var start = $("#start").val();
    var reset = $("#reset").val();


  })

});
