// document.getElementById("currentDay").append("hi")
$("#currentDay").append(dayjs().format('dddd, MMMM D, YYYY'))
var timeBlocks = $(".time-block")


function coloringTheTextArea() {
    var currentMilitaryTime = dayjs().format("H") // military time
    console.log(currentMilitaryTime)
    // $('#15').addClass("present") 
    $(".description").each(function(){
        console.log($(this))
        console.log($(this).attr("id"))
        if ($(this).attr("id") < currentMilitaryTime) {
            $(this).addClass("past");
        } else if ($(this).attr("id")  == currentMilitaryTime) {
            $(this).addClass("present");
        } else if ($(this).attr("id") > currentMilitaryTime) 
            $(this).addClass("future");
        
    });
    }

    
    for( var i = 0; i < timeBlocks.length; i++){
        var oneTimeBlock = timeBlocks[i]
        var time = oneTimeBlock.getAttribute("id")
        var textAreaEl = oneTimeBlock.children[1]
        console.log(textAreaEl)
    }


$(document).ready(function () {

    $("button").on("click", function() {
        localStorage.setItem();
    });

});

coloringTheTextArea();

