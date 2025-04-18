// Update jobs on page load

// $(function() {
//   alert("Working");
// })

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

//Toggle add button styling on hover

$('.add-button').on('mouseover', function() {
  $(this).css('background-color', '#364036');
});

$(".add-button").on('mouseout', function() {
  $(this).css('background-color', '#556354');
})

//Bring up new job entry field on button click

$("#add-button").on("click", function () {
  $("#jobs-group").hide();
  $(".add-job-group").css("cssText", "display: block !important");
});

$("#close-add-job-button").on("click", function () {
  $("#add-job-group").hide();
  $("#jobs-group").css("cssText", "display: block !important");
});

//Close new job entry field on cancel button click

const closeAddForm = () => {
  $("#add-job-group").hide();
  $("#jobs-group").css("cssText", "display: block !important");
}

//Toggle complete button styling on hover

$('.circle').on("mouseover", function() {
  $(this).css("background-color", "#586454");
  $(this).children("span").css("color", "white");
});

$('.circle').on('mouseout', function() {
  $(this).css("background-color", "transparent");
  $(this).children("span").css("color", "#586454")
})

//Make post request on completed button click

$(".circle").on("click", function () {
  let jobId = $(this).closest(".job").attr("id");

  console.log("Job ID:", jobId);

  $.ajax({
    type: "POST",
    url: "/complete-job",
    data: { jobId: jobId },
    success: function (responseData) {
      console.log("POST request succeeded");
      console.log(responseData);
      window.location.href = "/";
    },
    error: function (responseData) {
      console.log("POST request failed");
      console.log(responseData);
    },
  });
});

//Toggle delete button styling on hover

$('.delete-button').on("mouseover", function() {
  $(this).css("background-color", "#586454");
  $(this).children("span").css("color", "white");
});

$('.delete-button').on('mouseout', function() {
  $(this).css("background-color", "transparent");
  $(this).children("span").css("color", "#586454")
})

//Animate delete button on delete button click and make post request

$('.delete-button').on("click", function () {
  let jobId = $(this).attr("id");

  console.log("Job ID:", jobId);

  $.ajax({
    type: "DELETE",
    url: `/delete-job/${jobId}`,
    success: function (responseData) {
      console.log("DELETE request succeeded");
      console.log(responseData);
      window.location.href = "/";
    },
    error: function (responseData) {
      console.log("DELETE request failed");
      console.log(responseData);
    }
  })

});
