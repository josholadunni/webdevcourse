const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let blueAudio = new Audio("sounds/blue.mp3");
let greenAudio = new Audio("sounds/green.mp3");
let redAudio = new Audio("sounds/red.mp3");
let yellowAudio = new Audio("sounds/yellow.mp3");

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour)
  .fadeOut(100)
  .fadeIn(100);

let userChosenColour = $(".btn").on("click", function () {
  userChosenColour = this.id;
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

// $("#level-title").on("click", function () {
//   alert(userChosenColour);
// });
