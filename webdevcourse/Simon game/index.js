const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let blueAudio = new Audio("sounds/blue.mp3");
let greenAudio = new Audio("sounds/green.mp3");
let redAudio = new Audio("sounds/red.mp3");
let yellowAudio = new Audio("sounds/yellow.mp3");

function nextSequence() {
  console.log("Sequence running");
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  playSound(buttonColours[randomNumber]);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
}

let userChosenColour = $(".btn").on("click", function () {
  userChosenColour = this.id;
  playSound(this.id);
  animatePress(this.id);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});

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

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

const isStarted = false;

$(document).on("keypress", function () {
  if (!isStarted) {
    nextSequence();
  }
});

// $("#level-title").on("click", function () {
//   alert(userChosenColour);
// });
