// set the date at the top of the page
var today = moment().format('LLLL');
document.getElementById("todayDate").innerHTML = today.toString();

// Enter tasks information object to store in localStorage.



/* add tasks to localStorage */
document.getElementById("saveData").onclick
    = function () {
        var taskInput = document.getElementById("enterTask9").value;
        var taskHour = document.getElementById("hour9").innerHTML;
        
        //}
       localStorage.setItem(taskHour, taskInput);
    }

   
    
    /* load the tasks from localStorage and create tasks in the right row */
    $("#taskHour9 .task").val(localStorage.getItem("taskHour9"));

        // for each key/value pair in tasks, create a task
       

    // make sure the past/current/future time is reflected



    /* create a task in the row that corresponds to the specified hour */



    /* update the background of each row based on the time of day */

   
        // handle past, present, and future
        
    /* replaces the provided textarea element with a p element and persists the data in localStorage */

    // get the necessary elements

    // get the time and task

    // persist the data
    // replace the textarea element with a p element

/* CLICK HANDLERS */

// tasks

// convert to a textarea element if the time hasn't passed
   

// save button click handler

// update task backgrounds on the hour
    
// check how much time is left until the next hour

// get the tasks from localStorage on load.