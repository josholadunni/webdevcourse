let buttonsQty = document.querySelectorAll('button').length;

for (i = 0; i < buttonsQty; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        alert("I was clicked");
    })
}