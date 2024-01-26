// CHAT GPT
const colorSequence = ['dark-modeW', 'dark-modeR', 'dark-modeG', 'dark-modeB'];
let currentIndex = 0;

function changeColor(colorClass) {
  var element = document.body;

  // Remove the current color class
  element.classList.remove(...colorSequence);

  // Find the index of the selected color class
  currentIndex = colorSequence.indexOf(colorClass);

  // Add the new color class to the body
  element.classList.add(colorClass);
}
// CHAT GPT

// BIANARY ON/OFF SEQUENCE DOES NOT WORK IN THIS INSTENCE
// function myFunctionR() {
//    var element = document.body;
//    element.classList.toggle("dark-modeR");
// }
// function myFunctionG() {
//    var element = document.body;
//    element.classList.toggle("dark-modeG");
// }
// function myFunctionB() {
//    var element = document.body;
//    element.classList.toggle("dark-modeB");
// }




function myFunction2() {
  document.getElementById("R").innerHTML = "Red";
}
function myFunction3() {
  document.getElementById("G").innerHTML = "Green";
}