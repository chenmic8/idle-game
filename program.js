//Declare variables
let playerName;
// let employees = [];
// let clickUpgrades = [];
// let intervalId;
// let codeMonkeyPerSecond = 0;

//DOM selectors
const wrapper = document.querySelector(".wrapper");
const introScreen = document.querySelector("#intro-screen");
const playBtn = document.querySelector("#play-btn");
const gameTitle = document.querySelector("#intro-screen h1");
const submitNameContainer = document.querySelector("#submit-name-container");

const countDisplay = document.querySelector("#clicks");
const spriteBtn = document.querySelector("#sprite-button");
const moneyInBank = document.querySelector("#money-in-bank");
const moneyThisAscension = document.querySelector("#money-this-ascension");
const moneyAllTime = document.querySelector("#money-all-time");
const runTime = document.querySelector("#run-time");
const employeesHired = document.querySelector("#employees-hired");
const moneyPerSecond = document.querySelector("#money-per-second");
const moneyPerClick = document.querySelector("#money-per-click");
const selfMadeMoney = document.querySelector("#self-made-money");

function fromNameSelectToGameInterface(e) {
  introScreen.classList.add("hidden");
  wrapper.classList.remove("hidden");
  // e.value = playerName;
  console.log();
}
function fromStartScreenToNameSelect() {
  playBtn.classList.add("hidden");
  gameTitle.classList.add("hidden");
  submitNameContainer.classList.remove("hidden");
}

//data initialization
const global = {
    count: {
      current: 0,
      thisAscension: 0,
      allTime: 0,
    },
    passives: {
      perSecond: 0,
      total: 0,
      employees: 0,
    },
    clickUpgrades: {
      countPerClick: 1,
      countFromClicks: 0,
      clickAmount: 0,
    },
  },
  codeMonkey = {
    total: 0,
    efficiency: 1,
    price: 10,
  },
  spaghetti = {
    total: 0,
    efficiency: 1,
    price: 10,
  };

// efficiency = {
//   codeMonkey: 1,
//   expertGoogler: 10,
//   selfAwareAI: 100,
//   spaghetti: 2,
//   chromeTabOpener: 20,
//   keyboardShortcuts: 200,
// },
// population = {
//   codeMonkey: 0,
//   expertGoogler: 0,
//   selfAwareAI: 0,
//   spaghetti: 0,
//   chromeTabOpener: 0,
//   keyboardShortcuts: 0,
// },
// upgrades = {
//   monkeySeeMonkeyDo: 0, //monkey see bug, monkey eat bug - Mr. Monkey Manager
//   monkeySenses: 0, //monkey can sense a camouflaged bug and pop it - Mr. Ninja Monkey
//   greenPaint: 0, //a permanent solution to all the red in the code

//   itsNotABugItsAFeature: 0, //never write buggy code again - Mr. Team Lead
//   caffeineBloodMagic: 0, //new science shows success with injecting caffeine into the bloodstream via I.V. fluids
//   carpelTunnel: 0, //doctor says I need a wrist pad and compression sleeves - overworked employee

//   virtualHats: 0, //not the kind that helps you randomly draw a name - its the fashion statement kind - Mr. GPT
//   selfReplicatingHardware: 0, //robots now come in child sizes - S.S.S. News
//   worldDomination: 0, //someone send help - you

//   selfReplicatingSpaghetti: 0, //is it a virus? nah...
//   spaghettiFactory: 0, //copy pasta mass production
//   spaghettiCondenser: 0, //MORREEE! SPAGHETT! YIIIIIII!!!

//   memoryUpgrade: 0, //more memory = more chrome tabs = more POWER
//   middleMouseClick: 0, //instant opening and closing of new tabs
//   tabTrees: 0, //for multitasking purposes

//   krytexLubedKeys: 0, //faster, thonkier keyboard goodness
//   infinityScrollWheel: 0, //less energy wasted per scroll
//   RGB: 0, //Red is for speed, Green is for ecofriendly, Blue is for cooling
// };

function click() {
  console.log("click");
  // let currentIncrement = spaghetti.total * spaghetti.efficiency;
  // global.count.current += currentIncrement;
  // global.count.thisAscension += currentIncrement;
  // global.count.allTime += currentIncrement;
  // console.log(global.count.allTime);
}

// const count = {
//   currentCount: 0,
//   allTimeCount: 0,
//   countPerSecond: 0,
//   countPerClick: 1,
//   countFromClicks: 0,
//   countFromPassive: 0,
//   clickAmount: 0,
// };

// const clickPower = {
//   clickMultiplier: 1,
//   clickCount: 0,
// };

// class ClickUpgrade {
//   constructor(name, upgrade) {
//     this.name = name;
//     this.upgrade = upgrade;
//     this.multiplier = 1;
//   }
//   totalAmount() {
//     return this.upgrade * this.multiplier;
//   }
// }

// class Employee {
//   constructor(name, passiveCount) {
//     this.name = name;
//     this.passiveCount = passiveCount;
//     this.passiveMultiplier = 1;
//   }
//   totalPassiveAmount() {
//     return this.passiveCount * this.passiveMultiplier;
//   }
// }

// //FUNCITONS
// function hireEmployee(name, passiveAmount) {
//   let newEmployee = new Employee(name, passiveAmount);
//   //if employeed hired after an upgrade, apply those upgrades to the new employee
//   employees.forEach((employee) => {
//     if (employee.name === name) {
//       newEmployee.passiveMultiplier = employee.passiveMultiplier;
//     }
//   });
//   employees.push(newEmployee);
//   calculateEmployeeStatistics(name);
// }

// //find perSecond total for all employees
// function calculateEmployeeStatistics(name) {
//   let totalCountPerSecond = 0;
//   let totalEmployees = 0;
//   let singleCountPerSecond = 0;

//   employees.forEach((employee) => {
//     singleCountPerSecond = employee.totalPassiveAmount();
//     if (employee.name === name) {
//       totalCountPerSecond += employee.totalPassiveAmount();
//       totalEmployees += 1;
//     }
//   });
//   console.log(
//     `each ${name} produces ${singleCountPerSecond} with ${totalEmployees} ${name}s producing ${totalCountPerSecond}`
//   );
// }

// function calculateTotalEmployeesStatistics() {
//   let totalCountPerSecond = 0;
//   let totalEmployees = 0;

//   employees.forEach((employee) => {
//     totalCountPerSecond += employee.totalPassiveAmount();
//     totalEmployees += 1;
//   });
//   employeesHired.textContent = totalEmployees;
//   moneyPerSecond.textContent = totalCountPerSecond;

//   console.log(
//     `${totalEmployees} total employees producing ${totalCountPerSecond}`
//   );
// }
// //upgrade employee
// function upgradeEmployee(name, amount) {
//   employees.forEach((employee) => {
//     if (employee.name === name) {
//       employee.passiveMultiplier += amount;
//     }
//   });
//   calculateEmployeeStatistics(name);
// }
// //increment count
// function incrementCount(amount) {
//   count.currentCount += amount;
//   count.allTimeCount += amount;
//   moneyInBank.textContent = count.currentCount;
//   moneyThisAscension.textContent = count.allTimeCount;
//   moneyAllTime.textContent = count.allTimeCount;
//   count.clickAmount++;
// }

// function gameInterval() {
//   intervalId = setInterval(() => {
//     countPerSecond();
//     calculateTotalEmployeesStatistics();
//     countDisplay.textContent = count.currentCount;
//   }, 1000);
// }

// function countPerSecond() {
//   employees.forEach((employee) => {
//     incrementCount(employee.totalPassiveAmount());
//   });
// }

// //CLICK FUNCTIONS
// function incrementClick() {
//   incrementCount(clickPower.clickMultiplier);
//   clickPower.clickCount++;
//   calculateClickStatistics();
// }
// function upgradeClick(name, amount) {
//   let newClickUpgrade = new ClickUpgrade(name, amount);

//   clickUpgrades.forEach((clickUpgrade) => {
//     if (clickUpgrade.name === name) {
//       newClickUpgrade.multiplier = clickUpgrade.multiplier;
//     }
//   });
//   clickUpgrades.push(newClickUpgrade);
//   console.log(clickUpgrades);
//   calculateClickStatistics();
// }
// function upgradeClickUpgrade(name, multiplier) {
//   clickUpgrades.forEach((clickUpgrade) => {
//     if (clickUpgrade.name === name) {
//       clickUpgrade.multiplier *= multiplier;
//     }
//   });
//   calculateClickStatistics();
// }

// function calculateClickStatistics() {
//   let total = 0;

//   clickUpgrades.forEach((clickUpgrade) => {
//     total += clickUpgrade.totalAmount();
//   });
//   console.log(total);
//   clickPower.clickMultiplier = total;
//   moneyPerClick.textContent = 1 + clickPower.clickMultiplier;
//   selfMadeMoney.textContent = clickPower.clickCount;
// }

// gameInterval();
// // function incrementClickMultiplier(x) {
// //   clickMultiplier += x;
// // }

// // function passiveIncrementCountMultiplier(x) {
// //   passiveClickMultiplier += x;
// // }

// // function passiveIncrementCount() {
// //   const intervalId = setInterval(() => {
// //     clicks = passiveClickMultiplier + clicks;
// //     document.querySelector("#clicks").innerHTML = clicks;
// //   }, 1000);
// // }

// function askForName() {
//   let playBtn = document.querySelector("#play-btn");
//   let parent = document.querySelector("#intro-screen");
//   let nameInput = document.createElement("input");
//   let nameSubmitBtn = document.createElement("button");
//   nameSubmitBtn.textContent = "submit";
//   nameSubmitBtn.onclick = () => {
//     playerName = nameInput.value;
//     parent.removeChild(nameInput);
//     parent.removeChild(nameSubmitBtn);
//   };
//   parent.removeChild(playBtn);
//   parent.appendChild(nameInput);
//   parent.appendChild(nameSubmitBtn);
// }
