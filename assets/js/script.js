// set the date at the top of the page
var today = moment().format("dddd, MMMM DD YYYY, k:mm:ss a");
document.getElementById("todayDate").innerHTML = today.toString()

let taskHour = document.querySelectorAll(".taskHour");
let textEl = $("#enterTask10");

console.log(textEl);
//This uses moment() to setup the current day, month, and year
let currentDay = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDay);

//Setup an array for the hours of a work day
hoursIndex = 0;
let hoursArray = [
    {
        9: "9:00 am",
        10: "10:00 am",
        11: "11:00 am",
        12: "12:00 pm", 
        13: "13:00 pm",
        14: "14:00 pm",
        15: "15:00 pm",
        16: "16:00 pm", 
        17: "17:00 pm",
    }
]

//This will cycle through the hours array
function updateHours() {
    taskHour.innerHTML = hoursArray[hoursIndex][9]
    taskHour.innerHTML = hoursArray[hoursIndex][10]
    taskHour.innerHTML = hoursArray[hoursIndex][11]
    taskHour.innerHTML = hoursArray[hoursIndex][12]
    taskHour.innerHTML = hoursArray[hoursIndex][13]
    taskHour.innerHTML = hoursArray[hoursIndex][14]
    taskHour.innerHTML = hoursArray[hoursIndex][15]
    taskHour.innerHTML = hoursArray[hoursIndex][16]
    taskHour.innerHTML = hoursArray[hoursIndex][17]
  }
  
  updateHours();

//Save button
let saveButton = document.querySelectorAll(".saveBtn"); 

//Setup the click event to save the text to localStorage
  $(document).ready(function () {
      $(".saveBtn").click(function () {
        var parentEl = $(this).parent()
        var hour = parentEl.attr("id");
          var taskInput = parentEl.find(".taskInput");
          var schedularTask = taskInput.val();
        console.log(hour); 
        console.log(schedularTask);
        
        localStorage.setItem(hour, schedularTask);
      });

      $("#hour9 .taskInput").val(localStorage.getItem("hour9"));
      $("#hour10 .taskInput").val(localStorage.getItem("hour10"));
      $("#hour11 .taskInput").val(localStorage.getItem("hour11"));
      $("#hour12 .taskInput").val(localStorage.getItem("hour12"));
      $("#hour13 .taskInput").val(localStorage.getItem("hour13"));
      $("#hour14 .taskInput").val(localStorage.getItem("hour14"));
      $("#hour15 .taskInput").val(localStorage.getItem("hour15"));
      $("#hour16 .taskInput").val(localStorage.getItem("hour16"));
      $("#hour17 .taskInput").val(localStorage.getItem("hour17"));
      

      //This function is responsible for adding the colors to the event section for past, present, and future events.
      var currentHour = moment().format();
      $( ".row" ).each(function() {
        var hourTime = parseInt($(this).attr("id"));
          var taskTime = $(this).children().find(".taskInput");
          console.log(hourTime);
          if (hourTime < currentHour) {
              //past
              taskTime.addClass("vlinePast");
              taskTime.removeClass("vline");
          }
        //   else if (hourTime !== taskTime)
        //   {
        //     taskTime.addClass("vline");
        //   }
          else if (hourTime === currentHour)
          {
            //present
            taskTime.removeClass("vlinePast");
            taskTime.addClass("vlinePresent");
            taskTime.removeClass("vline");
              
          }
          else
          {
            //future
            taskTime.addClass("vlineFuture");
            taskTime.removeClass("vlinePast");
            taskTime.removeClass("vlinePresent");
            taskTime.removeClass("vline");
        }
      })
  });