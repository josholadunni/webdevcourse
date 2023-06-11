const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let levelTitle = $("#level-title");
let level = 0;

let blueAudio = new Audio("sounds/blue.mp3");
let greenAudio = new Audio("sounds/green.mp3");
let redAudio = new Audio("sounds/red.mp3");
let yellowAudio = new Audio("sounds/yellow.mp3");

//Choose the next random colour, add it to the game pattern array and animate the button.

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  playSound(buttonColours[randomNumber]);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  level += 1;
  levelTitle.text("Level " + level);
}

//Lets the user choose a colour, plays audio & animation and adds it to the user pattern array.

let userChosenColour = $(".btn").on("click", function () {
  userChosenColour = this.id;
  playSound(this.id);
  animatePress(this.id);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
});

//Plays a sound depending on the content of the colour string passed to the function.

function playSound(name) {
  if (name === "blue") {
    blueAudio.play();
  } else if (name === "green") {
    greenAudio.play();
  } else if (name === "yellow") {
    yellowAudio.play();
  } else {
    redAudio.play();
  }
}

//Paired with an on click function to animate a button depending on the value passed to this function.

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//Starts the game. Sets a boolean value to track if the game has been started and runs nextSequence() if false, then sets the variable to true.

let isStarted = false;

$(document).on("keypress", function () {
  if (isStarted == false) {
    levelTitle.text("Level " + level);
    nextSequence();
    isStarted = true;
  }
});

//Checks if the last item in the user pattern array is equivalent to the last item in the game pattern array.

function checkAnswer(currentLevel) {
  if (currentLevel == gamePattern[gamePattern.length - 1]) {
    // Checks if the user has finished their sequence by checking the 2 arrays are the same length.
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    console.log("fail");
  }
}
