// when i visit the page i should see the todays date
var hour = moment().format("H");
var today = moment();
$("#currentDay").text(today.format("dddd MMM Do YYYY"));

$(document).ready(function () { 
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    
        localStorage.setItem(time, text);
    })
//when timeblocks is current time the currnet color should be applied
// when timeblock is less than current time past color will be showed
//when timeblock is more than current time future color will be showed
   
    function timeSlot() {
    
        var timeNow = moment().hour();

    
        $(".row").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

// when i click the save button then the text on that time will be saved in the local storage
//when i restart the page the local storage text should be showed in the page

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2.description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    timeSlot();
})
 



