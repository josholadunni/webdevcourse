let buttonsQty = document.querySelectorAll('button').length;
var tom1Audio = new Audio('/webdevcourse/drumkit/sounds/tom-1.mp3')

for (i = 0; i < buttonsQty; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        tom1Audio.play();
    })
}