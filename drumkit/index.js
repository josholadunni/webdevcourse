//This code is used to make the drum kit website work. In this code we are
//using a for loop to add event listeners to all the buttons on the website.
//We are using the makeSound function to play the sound associated with the button
//and the buttonAnimation function to add the pressed class to the button
//when it is clicked or pressed.

let buttonsQty = document.querySelectorAll("button").length;

for (i = 0; i < buttonsQty; i++) {
    
  //Play sounds on click

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnHTML = this.innerHTML;

    buttonAnimation(btnHTML);
    makeSound(btnHTML);
  });

  //Play sounds on keypress

  document.addEventListener("keydown", function (event) {
    console.log("key pressed: " + event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}

function makeSound(key) {
  console.log("makeSound called with key: " + key);
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  console.log("buttonAnimation called with currentKey: " + currentKey);
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100)
}