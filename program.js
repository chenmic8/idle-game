//Declare variables
let playerName;
let employees = [];
let clickUpgrades = [];
let intervalId;
let codeMonkeyPerSecond = 0;

// var clickMultiplier = 1;
// var passiveClickMultiplier = 1;

console.log("");
console.log("");
console.log("");
console.log("");

//DOM selectors
const countDisplay = document.getElementById("clicks");
const spriteBtn = document.getElementById("sprite-button");
const moneyInBank = document.getElementById("money-in-bank");
const moneyThisAscension = document.getElementById("money-this-ascension");
const moneyAllTime = document.getElementById("money-all-time");
const runTime = document.getElementById("run-time");
const employeesHired = document.getElementById("employees-hired");
const moneyPerSecond = document.getElementById("money-per-second");
const moneyPerClick = document.getElementById("money-per-click");
const selfMadeMoney = document.getElementById("self-made-money");

const count = {
  currentCount: 0,
  allTimeCount: 0,
  countPerSecond: 0,
  countPerClick: 1,
  countFromClicks: 0,
  countFromPassive: 0,
  clickAmount: 0,
};

const clickPower = {
  clickMultiplier: 1,
  clickCount: 0,
};

class ClickUpgrade {
  constructor(name, upgrade) {
    this.name = name;
    this.upgrade = upgrade;
    this.multiplier = 1;
  }
  totalAmount() {
    return this.upgrade * this.multiplier;
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
  employeesHired.textContent = totalEmployees;
  moneyPerSecond.textContent = totalCountPerSecond;

  console.log(
    `${totalEmployees} total employees producing ${totalCountPerSecond}`
  );
}
//upgrade employee
function upgradeEmployee(name, amount) {
  employees.forEach((employee) => {
    if (employee.name === name) {
      employee.passiveMultiplier += amount;
    }
  });
  calculateEmployeeStatistics(name);
}
//increment count
function incrementCount(amount) {
  count.currentCount += amount;
  count.allTimeCount += amount;
  moneyInBank.textContent = count.currentCount;
  moneyThisAscension.textContent = count.allTimeCount;
  moneyAllTime.textContent = count.allTimeCount;
  count.clickAmount++;
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
  incrementCount(clickPower.clickMultiplier);
  clickPower.clickCount++;
  calculateClickStatistics();
}
function upgradeClick(name, amount) {
  let newClickUpgrade = new ClickUpgrade(name, amount);

  clickUpgrades.forEach((clickUpgrade) => {
    if (clickUpgrade.name === name) {
      newClickUpgrade.multiplier = clickUpgrade.multiplier;
    }
  });
  clickUpgrades.push(newClickUpgrade);
  console.log(clickUpgrades);
  calculateClickStatistics();
}
function upgradeClickUpgrade(name, multiplier) {
  clickUpgrades.forEach((clickUpgrade) => {
    if (clickUpgrade.name === name) {
      clickUpgrade.multiplier *= multiplier;
    }
  });
  calculateClickStatistics();
}

function calculateClickStatistics() {
  let total = 0;

  clickUpgrades.forEach((clickUpgrade) => {
    total += clickUpgrade.totalAmount();
  });
  console.log(total);
  clickPower.clickMultiplier = total;
  moneyPerClick.textContent = 1 + clickPower.clickMultiplier;
  selfMadeMoney.textContent = clickPower.clickCount;
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
