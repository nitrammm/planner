function displayDate() {
    document.getElementById("currentDay").innerHTML = Date();

};
displayDate();



var form =  document.getElementById("form")

    form.addEventListener("submit", function(event){
    event.preventDefault()



var schedule = document.getElementById("schedule").value

    console.log(schedule)

});

