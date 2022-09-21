
// // display our current day on the page 
// document.addEventListener("load",function(){




$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentHour = moment().hour();

// console.log("hour;" + currentHour);
var array = document.getElementById("container").querySelectorAll(".row");
for (let i = 0; i < array.length; i++) {
    var timeComponent = array[i];
    var time = 9  + i;


    if ( time < currentHour) {
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

// load any saved datat from our local storage
// Set Item

