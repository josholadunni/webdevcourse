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

// const dayNumber = date.getDate();

const dayNumber = date.getDate();

let dayNumberDecrement = dayNumber;

let dayNumberIncrement = dayNumber;

const dayOfWeekNumber = date.getDay();

const dayName = dayNames[dayOfWeekNumber];

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

const dayNumberAndSuffix = dayNumber + daySuffix();

$("#date-tagline").text(dayName + " " + dayNumberAndSuffix + " " + month);

//

//Display the correct numbers in each of the 7 date circles

// TODO - A leap year occurs every 4 years which adds an extra day to February.

let maxDays;
const minDays = 1;
let previousMaxDays;

//Refactor using 30 days of code article

switch (month) {
  case "January":
    maxDays = 31;
    previousMaxDays = 31;
    break;
  case "February":
    maxDays = 28;
    previousMaxDays = 31;
    break;
  case "March":
    maxDays = 31;
    previousMaxDays = 28;
    break;
  case "April":
    maxDays = 30;
    previousMaxDays = 31;
    break;
  case "May":
    maxDays = 31;
    previousMaxDays = 30;
    break;
  case "June":
    maxDays = 30;
    previousMaxDays = 31;
    break;
  case "July":
    maxDays = 31;
    previousMaxDays = 30;
    break;
  case "August":
    maxDays = 31;
    previousMaxDays = 31;
    break;
  case "September":
    maxDays = 30;
    previousMaxDays = 31;
    break;
  case "October":
    maxDays = 31;
    previousMaxDays = 30;
    break;
  case "November":
    maxDays = 30;
    previousMaxDays = 31;
    break;
  case "December":
    maxDays = 31;
    previousMaxDays = 30;
}

switch (dayOfWeekNumber) {
  case 0:
    //Sunday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day7").addClass("current-day");
    break;
  case 1:
    //Monday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day1").addClass("current-day");
    break;
  case 2:
    //Tuesday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day2").addClass("current-day");
    break;
  case 3:
    //Wednesday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day3").addClass("current-day");
    break;
  case 4:
    //Thursday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = previousMaxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day4").addClass("current-day");
    break;
  case 5:
    //Friday
    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day5").addClass("current-day");
    break;
  case 6:
    //Saturday

    for (i = dayOfWeekNumber; i >= 1; i--) {
      $(`#day${i}`).text(dayNumberDecrement);
      dayNumberDecrement--;
      if (dayNumberDecrement < 1) {
        dayNumberDecrement = maxDays;
      }
    }

    for (i = dayOfWeekNumber; i <= 7; i++) {
      $(`#day${i}`).text(dayNumberIncrement);
      dayNumberIncrement++;
      if (dayNumberIncrement > maxDays) {
        dayNumberIncrement = 1;
      }
    }

    $(".days-of-week li span").removeClass("current-day");
    $("#day6").addClass("current-day");
}

//Click on each day to select the new day

$(".days-of-week li span").each(function () {
  $(this).on("click", function () {
    $(".days-of-week li span").removeClass("current-day");
    $(this).addClass("current-day");
  });
});

//Click on each list button to display each list

$(".list-button button").each(function () {
  $(this).on("click", function () {
    $(".list-button button").removeClass("btn-filter-active");

    $(this).addClass("btn-filter-active");

    currentList = $(this).attr("id");

    let redirectUrl;
    if (currentList === "to-do-btn") {
      redirectUrl = "/";
    } else if (currentList === "missed-btn") {
      redirectUrl = "/missed";
    } else if (currentList === "completed-btn") {
      redirectUrl = "/completed";
    }

    $.post("/setCurrentList", { currentList }, function (res) {
      console.log(res);
      window.location.href = redirectUrl;
    });
  });
});
