var colors=["green" , "red" , "yellow" , "blue"];

var patternOfGame = [];
var userClick = [];

var started = false;
var level = 0;

$(document).keypress(function(){
  if(!started){
    $("level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userColor= $(this).attr("id");
  userClick.push(userColor);

  animatePress(userColor);

  checkAnswer(userClick.length-1);
});

function checkAnswer(currentLevel){
  if(patternOfGame[currentLevel] === userClick[currentLevel]){
    if(userClick.length === patternOfGame.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else{
    $("body").addClass("game-over");
    $("#level-title").text("Game-over, Press any key to restart");

    setTimeout(function(){
       $("body").removeClass("game-over");
    },200)

    startOver();
  }
}

function nextSequence() {
  userClickPattern = [];
  level++;

  $("#level-title").text("Level "+ level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  patternOfGame.push(randomColor);
  
  $("#"+ randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
}

function startOver(){
  level =0;
  patternOfGame =[];
  userClick =[];
  started =false;
}