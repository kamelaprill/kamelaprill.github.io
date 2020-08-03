var images = ["giphy.gif"];

let myh2 = document.getElementById("text");
let myh1=  document.getElementById("text2");

function changeText(){
  myh2.innerHTML = (myh2.innerHTML == "Welcome to my page") ? "Hope you enjoy!" : "Welcome to my page";
}
function changeText(){
  myh1.innerHTML = (myh1.innerHTML == "About Me") ? "Get to know me" : "About Me";
}

//Function to change font size to 24px from 16px
function changeSize() {
myh2.style.fontSize = (myh2.style.fontSize == "24px") ? "16px" : "24px";
}
function changeSize() {
myh1.style.fontSize = (myh1.style.fontSize == "24px") ? "16px" : "24px";
}

myh2.addEventListener("mouseover", changeText);
myh2.addEventListener("mouseleave", changeText);


myh2.addEventListener("mouseover", changeText);
myh2.addEventListener("mouseleave", changeText);


myh1.addEventListener("mouseover", changeText);
myh1.addEventListener("mouseleave", changeText);


myh1.addEventListener("mouseover", changeSize);
myh1.addEventListener("mouseleave", changeSize);













