var timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$(document).ready(function () {
  for (let index = 0; index < timeArray.length; index++) {
    const elementid = timeArray[index];
    var timeElement = $("#" + elementid);

   
    var textArea = timeElement.siblings()[0]
   $(textArea).val(localStorage.getItem(elementid));
    console.log(timeElement.siblings())
  
}
});

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

var currentHour = moment().hour();

var array = document.getElementById("container").querySelectorAll(".row");
for (let i = 0; i < array.length; i++) {
  var timeComponent = array[i];
  var time = 9 + i;

  if (time < currentHour) {
    timeComponent.classList.add("past");
  } else if (time === currentHour) {
    timeComponent.classList.remove("past");
    timeComponent.classList.add("present");
  } else {
    timeComponent.classList.remove("past");
    timeComponent.classList.remove("present");
    timeComponent.classList.add("future");
  }
}
function handleBtnClick(event) {
  var btn = $(this);
  var siblings = btn.siblings();
  var textArea = siblings[1];
  var textAreaText = textArea.value;
  var timeDivId = siblings[0].getAttribute("id");
  console.log(textAreaText, timeDivId);

  localStorage.setItem(timeDivId, textAreaText);
}
$(".btn").on("click", handleBtnClick);
