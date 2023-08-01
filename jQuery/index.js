$("h1").css("color", "red");

$(document).on("keypress", function (event) {
  console.log("Working");
  $("h1").text(event.key);
});
