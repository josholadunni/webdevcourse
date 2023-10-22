let numberOfJobs = $("#number-of-jobs").text();
let jobField = $("add-job-field");

//Current date tagline

const date = new Date();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = monthNames[date.getMonth()];

const day = dayNames[date.getDay()];

let daySuffix = function () {
  if (date.getDate().toString().slice(-1) == 1) {
    return "st";
  } else if (date.getDate().toString().slice(-1) == 2) {
    return "nd";
  } else if (date.getDate().toString().slice(-1) == 3) {
    return "rd";
  } else {
    return "th";
  }
};

const dayNumber = date.getDate() + daySuffix();

$("#date-tagline").text(day + " " + dayNumber + " " + month);

//

//Click on each day to select the new day

$(".days-of-week li span").each(function () {
  $(this).on("click", function () {
    $(".days-of-week li span").removeClass("current-day");
    $(this).addClass("current-day");
  });
});
