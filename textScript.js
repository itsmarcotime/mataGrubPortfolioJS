const para = document.getElementById("timeText1");

function myMessage() {
  para.innerHTML = "display me";
  console.log("message appeared");
}
setTimeout(myMessage, 3000);

const lala = document.getElementById("timeText2");

function myNewMessage() {
  lala.innerHTML = "part 2";
  console.log("message appeared");
}
setTimeout(myNewMessage, 6000);