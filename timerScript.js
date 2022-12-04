const para = document.getElementById("timeText");

function myMessage() {
  para.innerHTML = "display me";
  console.log("message appeared");
}
setTimeout(myMessage, 3000);