//Declare variables
let playerName;
var clicks = 0;
var clickMultiplier = 1;
var passiveClickMultiplier = 1;

//DOM selectors
let countDisplayElement = document.getElementById("clicks");
console.log(countDisplayElement);

//Functions
function incrementClick() {
  clicks += clickMultiplier;
  document.getElementById("clicks").innerHTML = clicks;
}

function incrementClickMultiplier(x) {
  clickMultiplier += x;
}

function passiveIncrementCountMultiplier(x) {
  passiveClickMultiplier += x;
}

function passiveIncrementCount() {
  const intervalId = setInterval(() => {
    clicks = passiveClickMultiplier + clicks;
    document.getElementById("clicks").innerHTML = clicks;
  }, 1000);
}

function askForName() {
  let playBtn = document.getElementById("play-btn");
  let parent = document.getElementById("intro-screen");
  let nameInput = document.createElement("input");
  let nameSubmitBtn = document.createElement("button");
  nameSubmitBtn.textContent = "submit";
  nameSubmitBtn.onclick = () => {
    playerName = nameInput.value;
    parent.removeChild(nameInput);
    parent.removeChild(nameSubmitBtn);
  };
  parent.removeChild(playBtn);
  parent.appendChild(nameInput);
  parent.appendChild(nameSubmitBtn);
}



//EXPERIMENTAL
class Counter{
  constructor(){
    
  }
}