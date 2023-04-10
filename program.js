//Declare variables
let playerName;
let employees = [];
let intervalId;
let codeMonkeyPerSecond = 0;

// var clickMultiplier = 1;
// var passiveClickMultiplier = 1;

//DOM selectors
const countDisplay = document.getElementById("clicks");
const spriteBtn = document.getElementById("sprite-button");

const count = {
  currentCount: 0,
  allTimeCount: 0,
  countPerSecond: 0,
  countPerClick: 1,
  countFromClicks: 0,
  countFromPassive: 0,
};

const click = {
  clickMultiplier: 1,
  clickCount: 0,
};

class ClickUpgrade {
  constructor(name, multiplier) {
    this.name = name;
    this.multiplier = multiplier;
  }
}

class Employee {
  constructor(name, passiveCount) {
    this.name = name;
    this.passiveCount = passiveCount;
    this.passiveMultiplier = 1;
  }
  totalPassiveAmount() {
    return this.passiveCount * this.passiveMultiplier;
  }
  setPassiveMultiplier(passiveMultiplier) {
    this.passiveMultiplier = passiveMultiplier;
  }
}

//FUNCITONS
function hireEmployee(name, passiveAmount) {
  let newEmployee = new Employee(name, passiveAmount);
  //if employeed hired after an upgrade, apply those upgrades to the new employee
  employees.forEach((employee) => {
    if (employee.name === name) {
      newEmployee.passiveMultiplier = employee.passiveMultiplier;
    }
  });
  employees.push(newEmployee);
  calculateEmployeeStatistics(name);
}

//find perSecond total for all employees
function calculateEmployeeStatistics(name) {
  let totalCountPerSecond = 0;
  let totalEmployees = 0;
  let singleCountPerSecond = 0;

  employees.forEach((employee) => {
    singleCountPerSecond = employee.totalPassiveAmount();
    if (employee.name === name) {
      totalCountPerSecond += employee.totalPassiveAmount();
      totalEmployees += 1;
    }
  });
  console.log(
    `each ${name} produces ${singleCountPerSecond} with ${totalEmployees} ${name}s producing ${totalCountPerSecond}`
  );
}

function calculateTotalEmployeesStatistics() {
  let totalCountPerSecond = 0;
  let totalEmployees = 0;

  employees.forEach((employee) => {
    totalCountPerSecond += employee.totalPassiveAmount();
    totalEmployees += 1;
  });
  console.log(
    `${totalEmployees} total employees producing ${totalCountPerSecond}`
  );
}

function upgradeEmployee(name, amount) {
  employees.forEach((employee) => {
    if (employee.name === name) {
      employee.passiveMultiplier *= amount;
    }
  });
  calculateEmployeeStatistics(name);
}

function incrementCount(amount) {
  count.currentCount += amount;
  count.allTimeCount += amount;
}

function gameInterval() {
  intervalId = setInterval(() => {
    countPerSecond();
    calculateTotalEmployeesStatistics();
    countDisplay.textContent = count.currentCount;
  }, 1000);
}

function countPerSecond() {
  employees.forEach((employee) => {
    incrementCount(employee.totalPassiveAmount());
  });
}

//CLICK FUNCTIONS
function incrementClick() {
  incrementCount(click.clickMultiplier);
}
function upgradeClick() {
  console.log("here");
}

gameInterval();
// function incrementClickMultiplier(x) {
//   clickMultiplier += x;
// }

// function passiveIncrementCountMultiplier(x) {
//   passiveClickMultiplier += x;
// }

// function passiveIncrementCount() {
//   const intervalId = setInterval(() => {
//     clicks = passiveClickMultiplier + clicks;
//     document.getElementById("clicks").innerHTML = clicks;
//   }, 1000);
// }

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
