var timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5]
// // display our current day on the page 
$(document).ready(function () {
    for (let i = 0; i < timeArray.length; i++) {
        var timeId = timeArray[i];
    }
})




$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentHour = moment().hour();

// console.log("hour;" + currentHour);
var array = document.getElementById("container").querySelectorAll(".row");
for (let i = 0; i < array.length; i++) {
    var timeComponent = array[i];
    var time = 9 + i;


    if (time < currentHour) {
        // define what the selectors 
        timeComponent.classList.add('past')
    } else if (time === currentHour) {
        timeComponent.classList.remove('past')
        timeComponent.classList.add('present')
    } else {
        timeComponent.classList.remove('past')
        timeComponent.classList.remove('present')
        timeComponent.classList.add('future')
    }
}
function handleBtnClick(event) {
    var btn = $(this)
    var siblings = btn.siblings()
    var textArea = siblings[1]
    var textAreaText = textArea.value
    var timeDivId = siblings[0].getAttribute("id")
    console.log(textAreaText, timeDivId)

    localStorage.setItem(timeDivId, textAreaText)
   

}