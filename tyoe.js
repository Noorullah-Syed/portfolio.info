// Type Writing effect
var i = 0;
var txt = "I'm Syed Noorullah"; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

window.onload = function() {
    typeWriter();
  };
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-fx").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}