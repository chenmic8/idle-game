//Declare variables
let playerName;
let intervalId;

//DOM selectors
const wrapper = document.querySelector(".wrapper");
const introScreen = document.querySelector("#intro-screen");
const playBtn = document.querySelector("#play-btn");
const gameTitle = document.querySelector("#intro-screen h1");
const submitNameContainer = document.querySelector("#submit-name-container");
const playerNameInput = document.querySelector("#player-name-input");
const playerNameDisplay1 = document.querySelector("#player-name-1");
const playerNameDisplay2 = document.querySelector("#player-name-2");
const countDisplay = document.querySelector("#clicks");
const spriteBtn = document.querySelector("#sprite-button");
const moneyInBank = document.querySelector("#money-in-bank");
const moneyThisAscension = document.querySelector("#money-this-ascension");
const moneyAllTime = document.querySelector("#money-all-time");
const runTime = document.querySelector("#run-time");
const employeesHired = document.querySelector("#employees-hired");
const moneyPerSecond = document.querySelector("#money-per-second");
const moneyPerClick = document.querySelector("#money-per-click");
const totalClicks = document.querySelector("#self-made-money");
const spaghettiCountDisplay = document.querySelector("#spaghetti-count"); //price and count DIVS
const spaghettiPriceDisplay = document.querySelector("#spaghetti-price");
const chromeTabOpenerCountDisplay = document.querySelector("#chrome-count");
const chromeTabOpenerPriceDisplay = document.querySelector("#chrome-price");
const keyboardShortcutCountDisplay = document.querySelector("#keyboard-count");
const keyboardShortcutPriceDisplay = document.querySelector("#keyboard-price");
const upgradesContainer = document.getElementById("upgrades-container");
const employeesContainer = document.querySelector("#employees-container");
const mainDisplayMoneyPerSecond = document.querySelector("#per-second");
const healthBar = document.querySelector(".progress-bar-inner");

//data initialization
let global = {
    clicks: 0,
    runTime: 0,
    count: {
      current: 0,
      thisAscension: 0,
      allTime: 0,
    },
  },
  codeMonkey = {
    priceID: "monkey-price",
    totalID: "monkey-total",
    popupPriceID: "popup-monkey-price",
    popupTotalID: "popup-monkey-total",
    name: "Code Monkey",
    total: 0,
    efficiency: 1,
    price: 10,
    upgrades: [
      {
        priceID: "monkey-up-price-1",
        totalID: "moneky-up-total-1",
        name: "Monkey See Monkey Do",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "monkey see bug, monkey eat bug <br>- Mr. Monkey Manager",
      },
      {
        priceID: "monkey-up-price-2",
        totalID: "moneky-up-total-2",
        name: "Monkey Senses",
        total: 0,
        efficiency: 10,
        price: 100,
        quote:
          "monkey can sense a camouflaged bug and pop it <br>- Mr. Ninja Monkey",
      },
      {
        priceID: "monkey-up-price-3",
        totalID: "moneky-up-total-3",
        name: "Green Paint",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "a permanent solution to all the red in the code",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  },
  expertGoogler = {
    priceID: "googler-price",
    totalID: "googler-total",
    popupPriceID: "popup-googler-price",
    popupTotalID: "popup-googler-total",
    name: "Expert Googler",
    total: 0,
    efficiency: 10,
    price: 100,
    upgrades: [
      {
        priceID: "googler-up-price-1",
        totalID: "googler-up-total-1",
        name: "Its Not A Bug Its A Feature",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "how to never write buggy code again <br>- Mr. Team Lead",
      },
      {
        priceID: "googler-up-price-2",
        totalID: "googler-up-total-2",
        name: "Caffeine Blood Magic",
        total: 0,
        efficiency: 10,
        price: 100,
        quote:
          "new science shows success with injecting caffeine into the bloodstream via I.V. fluids",
      },
      {
        priceID: "googler-up-price-3",
        totalID: "googler-up-total-3",
        name: "Carpel Tunnel",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote:
          "no pain no gain... doctor says I need a wrist pad and compression sleeves <br>- overworked employee",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  },
  selfAwareAI = {
    priceID: "ai-price",
    totalID: "ai-total",
    popupPriceID: "popup-ai-price",
    popupTotalID: "popup-ai-total",
    name: "Self Aware AI",
    total: 0,
    efficiency: 100,
    price: 1000,
    upgrades: [
      {
        priceID: "ai-up-price-1",
        totalID: "ai-up-total-1",
        name: "Virtual Hats",
        total: 0,
        efficiency: 1,
        price: 10,
        quote:
          "no, not the kind that helps you randomly draw a name - its the fashion statement kind <br>- Mr. GPT",
      },
      {
        priceID: "ai-up-price-2",
        totalID: "ai-up-total-2",
        name: "Self Replicating Hardware",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "robots now come in child sizes <br>- S.S.S. News",
      },
      {
        priceID: "ai-up-price-3",
        totalID: "ai-up-total-3",
        name: "World Domination",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "someone send help <br>- you",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  },
  spaghetti = {
    priceID: "spaghetti-price",
    totalID: "spaghetti-total",
    popupPriceID: "popup-spaghetti-price",
    popupTotalID: "popup-spaghetti-total",
    name: "Spaghetti",
    total: 0,
    efficiency: 1, //USED TO BE 1 BUT CHANGED VALUE FOR TESTING PURPOSES
    price: 10,
    upgrades: [
      {
        priceID: "spaghetti-up-price-1",
        totalID: "spaghetti-up-total-1",
        name: "Self Replicating Spaghetti",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "is it a virus? nah...",
      },
      {
        priceID: "spaghetti-up-price-2",
        totalID: "spaghetti-up-total-2",
        name: "Spaghetti Factory",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "copy pasta mass production",
      },
      {
        priceID: "spaghetti-up-price-3",
        totalID: "spaghetti-up-total-3",
        name: "Spaghetti Condenser",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "MORREEE! SPAGHETT! YIIIIIII!!!",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  },
  chromeTabOpener = {
    priceID: "chrome-price",
    totalID: "chrome-total",
    popupPriceID: "popup-chrome-price",
    popupTotalID: "popup-chrome-total",
    name: "Chrome Tab Opener",
    total: 0,
    efficiency: 10,
    price: 100,
    upgrades: [
      {
        priceID: "chrome-up-price-1",
        totalID: "chrome-up-total-1",
        name: "Memory Upgrade",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "more memory = more chrome tabs = more POWER",
      },
      {
        priceID: "chrome-up-price-2",
        totalID: "chrome-up-total-2",
        name: "Middle Mouse Click",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "instant opening and closing of new tabs",
      },
      {
        priceID: "chrome-up-price-3",
        totalID: "chrome-up-total-3",
        name: "Tab Trees",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "for... multitasking purposes...",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  },
  keyboardShortcut = {
    priceID: "keyboard-price",
    totalID: "keyboard-total",
    popupPriceID: "popup-keyboard-price",
    popupTotalID: "popup-keyboard-total",
    name: "Keyboard Shortcut",
    total: 0,
    efficiency: 100,
    price: 1000,
    upgrades: [
      {
        priceID: "keyboard-up-price-1",
        totalID: "keyboard-up-total-1",
        name: "Krytex Lubed Keys",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "faster, thonkier keyboard goodness",
      },
      {
        priceID: "keyboard-up-price-2",
        totalID: "keyboard-up-total-2",
        name: "Infinity Scroll Wheel",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "less energy wasted per scroll",
      },
      {
        priceID: "keyboard-up-price-3",
        totalID: "keyboard-up-total-3",
        name: "RGB",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote:
          "Red is for speed, <br>Green is for ecofriendly, <br>Blue is for cooling",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
let hitPointBarStats = {
  hitPointTotal: 100,
  hitPointCurrent: 0,
  hitPointPercent: 0, //out of 100%, what percent is it at
  reward: 10,
  complete: false,
};
const employees = [
  codeMonkey,
  expertGoogler,
  selfAwareAI,
  spaghetti,
  chromeTabOpener,
  keyboardShortcut,
];
// const passiveEmployees = [codeMonkey, expertGoogler, selfAwareAI];
// const activeEmployees = [spaghetti, chromeTabOpener, keyboardShortcut];

//dynamically add upgrade buttons
function renderUpgradeButtons() {
  let i = 0;
  for (employee of employees) {
    //create elements for employees
    const employeeContainer = document.createElement("div");
    const employeePopupContainer = document.createElement("div");
    const popupImg = document.createElement("img");
    const popupInformationContainer = document.createElement("div");
    const popupemployeeName = document.createElement("h2");
    const employeePopupLineBreak = document.createElement("hr");
    const popupPriceText = document.createElement("p");
    const popupPriceSpan = document.createElement("span");
    const popupTotalText = document.createElement("p");
    const popupTotalSpan = document.createElement("span");
    const unorderedList = document.createElement("ul");
    const statistic1 = document.createElement("li");
    const statistic2 = document.createElement("li");
    const employeeImg = document.createElement("img");
    const employeeInformationContainer = document.createElement("div");
    const employeeNameDisplay = document.createElement("p");
    const employeePriceSpan = document.createElement("span");
    const employeeTotalSpan = document.createElement("span");
    //set attributes of elements of employees
    employeeContainer.setAttribute("class", "employee-container employee");
    employeeContainer.setAttribute(
      "onclick",
      `buyEmployee("${employee.name}")`
    );
    employeePopupContainer.setAttribute("class", "employee-popup");
    popupImg.setAttribute("class", "employee-icon");
    popupImg.setAttribute("src", "./images/cog.png");
    popupImg.setAttribute("alt", employee.name);
    popupemployeeName.textContent = employee.name;
    popupPriceText.textContent = "Price: ";
    popupPriceSpan.textContent = employee.price;
    popupPriceSpan.setAttribute("id", employee.popupPriceID);
    popupPriceSpan.setAttribute("class", "dollar");
    popupTotalText.textContent = "Owned: ";
    popupTotalSpan.textContent = "0";
    popupTotalSpan.setAttribute("id", employee.popupTotalID);
    statistic1.textContent = `Each ${employee.name} produces ${employee.efficiency} per action`;
    statistic2.textContent = `${employee.total} ${
      employee.name
    }s producing ${employee.getTotal()} per action`;
    employeeImg.setAttribute("class", "employee-icon");
    employeeImg.setAttribute("src", "./images/cog.png"); //WHEN ART DONE: this should be from a value in data objects
    employeeImg.setAttribute("alt", employee.name);
    employeeInformationContainer.setAttribute(
      "class",
      "employee-information-container"
    );
    employeeNameDisplay.textContent = employee.name;
    employeePriceSpan.textContent = employee.price;
    employeePriceSpan.setAttribute("id", employee.priceID);
    employeePriceSpan.setAttribute("class", "dollar");
    employeeTotalSpan.textContent = "0";
    employeeTotalSpan.setAttribute("id", employee.totalID);
    //combine nodes of employees
    employeesContainer.appendChild(employeeContainer);
    employeeContainer.appendChild(employeePopupContainer);
    employeePopupContainer.appendChild(popupImg);
    employeePopupContainer.appendChild(popupInformationContainer);
    popupInformationContainer.appendChild(popupemployeeName);
    popupInformationContainer.appendChild(employeePopupLineBreak);
    popupInformationContainer.appendChild(popupPriceText);
    popupPriceText.appendChild(popupPriceSpan);
    popupInformationContainer.appendChild(popupTotalText);
    popupTotalText.appendChild(popupTotalSpan);
    popupInformationContainer.appendChild(unorderedList);
    unorderedList.appendChild(statistic1);
    unorderedList.appendChild(statistic2);
    employeeContainer.appendChild(employeeImg);
    employeeContainer.appendChild(employeeInformationContainer);
    employeeInformationContainer.appendChild(employeeNameDisplay);
    employeeInformationContainer.appendChild(employeePriceSpan);
    employeeContainer.appendChild(employeeTotalSpan);
    for (upgrade of employee.upgrades) {
      //create elements for upgrade buttons
      const upgradeBtn = document.createElement("button");
      const upgradeBtnImg = document.createElement("img");
      const popupContainer = document.createElement("div");
      const employeeIcon = document.createElement("img");
      const informationContainer = document.createElement("div");
      const employeeName = document.createElement("h2");
      const lineBreak = document.createElement("hr");
      const priceText = document.createElement("p");
      const priceSpan = document.createElement("span");
      const totalText = document.createElement("p");
      const totalSpan = document.createElement("span");
      const employeeDescription = document.createElement("li");
      const employeeQuote = document.createElement("p");
      //set attributes of elements for upgrade buttons
      upgradeBtn.classList.add("upgrade");
      upgradeBtn.setAttribute(
        "onclick",
        `buyUpgrade("${employee.name}",${i % 3})`
      );
      upgradeBtnImg.setAttribute("class", "employee-icon");
      upgradeBtnImg.setAttribute("src", "./images/cog.png");
      upgradeBtnImg.setAttribute("alt", upgrade.name);
      popupContainer.setAttribute("class", "upgrade-popup");
      employeeIcon.setAttribute("class", "employee-icon");
      employeeIcon.setAttribute("src", "./images/cog.png");
      employeeIcon.setAttribute("alt", upgrade.name);
      employeeName.textContent = upgrade.name;
      priceText.textContent = "Price: ";
      priceSpan.setAttribute("class", "dollar");
      priceSpan.setAttribute("id", upgrade.priceID);
      priceSpan.textContent = upgrade.price;
      totalText.textContent = "Owned: ";
      totalSpan.textContent = "0";
      totalSpan.setAttribute("id", upgrade.totalID);
      employeeDescription.setAttribute("class", "item-description");
      employeeDescription.textContent = `Add ${upgrade.efficiency} to effectiveness of ${employee.name}`;
      employeeQuote.setAttribute("class", "quote");
      employeeQuote.innerHTML = upgrade.quote;

      //combine nodes for upgrade buttons
      upgradesContainer.appendChild(upgradeBtn);
      upgradeBtn.appendChild(upgradeBtnImg);
      upgradeBtn.appendChild(popupContainer);
      popupContainer.appendChild(employeeIcon);
      popupContainer.appendChild(informationContainer);
      informationContainer.appendChild(employeeName);
      informationContainer.appendChild(lineBreak);
      informationContainer.appendChild(priceText);
      priceText.appendChild(priceSpan);
      informationContainer.appendChild(totalText);
      totalText.appendChild(totalSpan);
      informationContainer.appendChild(employeeDescription);
      informationContainer.appendChild(employeeQuote);
      i++;
    }
  }
}

function fromNameSelectToGameInterface() {
  playerName = playerNameInput.value;
  if (!playerName) {
    return;
  }
  //clear the input
  playerNameInput.value = "";
  //set player name dom elements
  playerNameDisplay1.textContent = playerName;
  playerNameDisplay2.textContent = playerName;
  disappearNameSelect();
  appearGameInterface();
  resetAllDOM();
}
function fromStartScreenToNameSelect() {
  disappearIntroScreen();
  appearNameSelect();
}
function disappearIntroScreen() {
  introScreen.classList.add("hidden");
}

function disappearGameInterface() {
  wrapper.classList.add("hidden");
}
function appearGameInterface() {
  wrapper.classList.remove("hidden");
}

function disappearNameSelect() {
  submitNameContainer.classList.add("hidden");
}

function appearNameSelect() {
  submitNameContainer.classList.remove("hidden");
}

function updateRightMonitorAndMainDisplay() {
  //current count in bank to main display
  countDisplay.textContent = global.count.current;
  //current count in bank to right monitor
  moneyInBank.textContent = global.count.current;
  //all time count to right monitor
  moneyAllTime.textContent = global.count.allTime;
  //count this ascension to right monitor
  moneyThisAscension.textContent = global.count.thisAscension;
  //run started
  runTime.textContent = global.runTime; //TO DO: make function to make this look like 00:00:00!!!!!!!!!!!!!!!!!!!!
  //employees hired
  employeesHired.textContent =
    codeMonkey.total +
    expertGoogler.total +
    selfAwareAI.total +
    spaghetti.total +
    chromeTabOpener.total +
    keyboardShortcut.total;
  //money per second
  moneyPerSecond.textContent =
    codeMonkey.getTotal() + expertGoogler.getTotal() + selfAwareAI.getTotal();
  mainDisplayMoneyPerSecond.textContent =
    codeMonkey.getTotal() + expertGoogler.getTotal() + selfAwareAI.getTotal();
  //money per click
  moneyPerClick.textContent =
    1 +
    spaghetti.getTotal() +
    chromeTabOpener.getTotal() +
    keyboardShortcut.getTotal();
  //total clicks to right monitor
  totalClicks.textContent = global.clicks;
}

function incrementAllGlobalCount(increment) {
  global.count.current += increment;
  global.count.thisAscension += increment;
  global.count.allTime += increment;
}

function incrementClick() {
  let increment =
    1 +
    spaghetti.getTotal() +
    chromeTabOpener.getTotal() +
    keyboardShortcut.getTotal();
  incrementHitPointBar(increment);
  incrementAllGlobalCount(increment);
  global.clicks++;
  updateRightMonitorAndMainDisplay();
}

function incrementPassive() {
  let increment =
    codeMonkey.getTotal() + expertGoogler.getTotal() + selfAwareAI.getTotal();
  incrementAllGlobalCount(increment);
  updateRightMonitorAndMainDisplay();
}

function gameInterval() {
  intervalId = setInterval(() => {
    incrementPassive();
    global.runTime++;
  }, 1000);
}

function subtractMoneyFromBank(value) {
  global.count.current -= value;
  countDisplay.textContent = global.count.current;
  moneyInBank.textContent = global.count.current;
}

function whichEmployee(name) {
  if (name === "Code Monkey") {
    return codeMonkey;
  } else if (name === "Expert Googler") {
    return expertGoogler;
  } else if (name === "Self Aware AI") {
    return selfAwareAI;
  } else if (name === "Spaghetti") {
    return spaghetti;
  } else if (name === "Chrome Tab Opener") {
    return chromeTabOpener;
  } else if (name === "Keyboard Shortcut") {
    return keyboardShortcut;
  }
  console.log("not a valid employee name");
}

function updateEmployeePopup(employee) {
  //get variables needed to calculate employee statistics
  let upgradeTotal1 =
    employee.upgrades[0].total * employee.upgrades[0].efficiency;
  let upgradeTotal2 =
    employee.upgrades[1].total * employee.upgrades[1].efficiency;
  let upgradeTotal3 =
    employee.upgrades[2].total * employee.upgrades[2].efficiency;
  let perIncrement =
    employee.efficiency + upgradeTotal1 + upgradeTotal2 + upgradeTotal3;
  //dom-select the price, total, statistic1, statistic2
  const popupPriceDisplay = document.getElementById(employee.popupPriceID);
  const popupTotalDisplay = document.getElementById(employee.popupTotalID);
  const popupInformationContainer =
    popupPriceDisplay.parentElement.parentElement;
  const statistic1 = popupInformationContainer.querySelectorAll("li")[0];
  const statistic2 = popupInformationContainer.querySelectorAll("li")[1];
  //update dom values
  popupPriceDisplay.textContent = employee.price;
  popupTotalDisplay.textContent = employee.total;
  console.log("TESTING", popupPriceDisplay);
  console.log("TESTING", popupPriceDisplay.textContent);
  console.log(employee.price);
  statistic1.textContent = `Each ${employee.name} produces ${perIncrement} per action`;
  statistic2.textContent = `${employee.total} ${
    employee.name
  }s producing ${employee.getTotal()} per action`;
}

function updateEmployeeDiv(employee) {
  const priceDisplay = document.getElementById(employee.priceID);
  const totalDisplay = document.getElementById(employee.totalID);
  priceDisplay.textContent = employee.price;
  totalDisplay.textContent = employee.total;
}

function buyEmployee(name) {
  let employee = whichEmployee(name);
  if (employee.price <= global.count.current) {
    employee.total++;
    subtractMoneyFromBank(employee.price);
    employee.price = Math.floor(employee.price * 1.2);
    updateEmployeePopup(employee);
    updateEmployeeDiv(employee);
  } else {
    console.log("not enough money");
  }
}

function updateUpgradePopup(upgrade) {
  const upgradePriceDisplay = document.getElementById(upgrade.priceID);
  const upgradeTotalDisplay = document.getElementById(upgrade.totalID);
  upgradePriceDisplay.textContent = upgrade.price;
  upgradeTotalDisplay.textContent = upgrade.total;
}

function buyUpgrade(name, upgradeIndex) {
  let employee = whichEmployee(name);
  let upgrade = employee.upgrades[upgradeIndex];
  if (upgrade.price <= global.count.current) {
    upgrade.total++;
    subtractMoneyFromBank(upgrade.price);
    upgrade.price = Math.floor(upgrade.price * 1.2);
    updateEmployeePopup(employee);
    updateUpgradePopup(upgrade);
    console.log(employee);
  } else {
    console.log("not enough money");
  }
}

function sprintComplete() {
  //show reward and update global money
  healthBar.style.width = "100%";
  incrementAllGlobalCount(hitPointBarStats.reward);
  healthBar.textContent = `Earned: $${hitPointBarStats.reward}`;
  setTimeout(() => {
    console.log("sprint COMPLETE");
    //reset healthbar dom
    healthBar.textContent = "";
    healthBar.style.width = 0 + "%";
    //reset hitpointbarstats
    hitPointBarStats.hitPointPercent = 0;
    hitPointBarStats.hitPointCurrent = 0;
    //increase hitpoint hp
    hitPointBarStats.hitPointTotal *= 10;
    //raise hitpoint reward
    hitPointBarStats.reward = Math.floor(hitPointBarStats.reward * 2.1);
    hitPointBarStats.complete = false;
  }, 5000);
  console.log(hitPointBarStats);
}

function incrementHitPointBar(increment) {
  hitPointBarStats.hitPointCurrent += increment;
  if (
    hitPointBarStats.hitPointCurrent >= hitPointBarStats.hitPointTotal &&
    !hitPointBarStats.complete
  ) {
    console.log("hit the win conditional");
    hitPointBarStats.complete = true;
    sprintComplete();
  } else if (
    hitPointBarStats.hitPointCurrent >= hitPointBarStats.hitPointTotal
  ) {
    console.log("pause champ, u aint progressing the next spring rn");
    return;
  } else {
    let percentIncrement = parseFloat(
      (100 * (increment / hitPointBarStats.hitPointTotal)).toFixed(2)
    );
    console.log(percentIncrement);
    hitPointBarStats.hitPointPercent += percentIncrement;
    healthBar.style.width = hitPointBarStats.hitPointPercent + "%";
  }
}

function checkRefactorRequirements() {
  for (employee of employees) {
    if (!employee.total) {
      return;
    }
    for (upgrade of employee.upgrades) {
      if (!upgrade.total) {
        return;
      }
    }
  }
  return true;
}

const refactorPopup = document.querySelector("#refactor-popup-container");
//ask if you're sure u want to refactor
function appearRefactorPopup() {
  refactorPopup.classList.remove("invisible");
}
function disappearRefactorPopup() {
  refactorPopup.classList.add("invisible");
}

function refactor() {
  //check if there is at least one of everything
  if (!checkRefactorRequirements()) {
    console.log("don't have all requirements");
    return;
  }
  //reset all teh data except for asset "effectiveness" and "all time count"
  //buff effectiveness of all employees
  resetData();

  //disappear popoup
  disappearRefactorPopup();
  appearGameInterface();
  console.log("FINISHED RESETTING DATA");
  //updateDOM
  updateRightMonitorAndMainDisplay();
  // for (employee of employees) {
  //   console.log(`updating stuff for ${employee}`);
  //   console.log("BELOW IS THE EMPLOYE THAT HAS BEEN SUPPOSEDLY RESET");
  //   console.log(employee);
  //   updateEmployeePopup(employee);
  //   updateEmployeeDiv(employee);
  //   for (upgrade of employee.upgrades) {
  //     updateUpgradePopup(upgrade);
  //   }
  // }
  //bring to name page
  disappearGameInterface();
  appearNameSelect();
}
function resetAllDOM() {
  let employees = [
    codeMonkey,
    expertGoogler,
    selfAwareAI,
    spaghetti,
    chromeTabOpener,
    keyboardShortcut,
  ];
  for (employee of employees) {
    console.log(`updating stuff for ${employee}`);
    console.log("BELOW IS THE EMPLOYE THAT HAS BEEN SUPPOSEDLY RESET");
    console.log(employee);
    updateEmployeePopup(employee);
    updateEmployeeDiv(employee);
    for (upgrade of employee.upgrades) {
      updateUpgradePopup(upgrade);
    }
  }
}

function resetData() {
  playerName = "";
  global = {
    clicks: 0,
    runTime: 0,
    count: {
      current: 0,
      thisAscension: 0,
      allTime: global.count.allTime,
    },
  };
  codeMonkey = {
    priceID: "monkey-price",
    totalID: "monkey-total",
    popupPriceID: "popup-monkey-price",
    popupTotalID: "popup-monkey-total",
    name: "Code Monkey",
    total: 0,
    efficiency: codeMonkey.efficiency * 2,
    price: 10,
    upgrades: [
      {
        priceID: "monkey-up-price-1",
        totalID: "moneky-up-total-1",
        name: "Monkey See Monkey Do",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "monkey see bug, monkey eat bug <br>- Mr. Monkey Manager",
      },
      {
        priceID: "monkey-up-price-2",
        totalID: "moneky-up-total-2",
        name: "Monkey Senses",
        total: 0,
        efficiency: 10,
        price: 100,
        quote:
          "monkey can sense a camouflaged bug and pop it <br>- Mr. Ninja Monkey",
      },
      {
        priceID: "monkey-up-price-3",
        totalID: "moneky-up-total-3",
        name: "Green Paint",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "a permanent solution to all the red in the code",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  console.log(codeMonkey);
  expertGoogler = {
    priceID: "googler-price",
    totalID: "googler-total",
    popupPriceID: "popup-googler-price",
    popupTotalID: "popup-googler-total",
    name: "Expert Googler",
    total: 0,
    efficiency: expertGoogler.efficiency * 2,
    price: 100,
    upgrades: [
      {
        priceID: "googler-up-price-1",
        totalID: "googler-up-total-1",
        name: "Its Not A Bug Its A Feature",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "how to never write buggy code again <br>- Mr. Team Lead",
      },
      {
        priceID: "googler-up-price-2",
        totalID: "googler-up-total-2",
        name: "Caffeine Blood Magic",
        total: 0,
        efficiency: 10,
        price: 100,
        quote:
          "new science shows success with injecting caffeine into the bloodstream via I.V. fluids",
      },
      {
        priceID: "googler-up-price-3",
        totalID: "googler-up-total-3",
        name: "Carpel Tunnel",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote:
          "no pain no gain... doctor says I need a wrist pad and compression sleeves <br>- overworked employee",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  selfAwareAI = {
    priceID: "ai-price",
    totalID: "ai-total",
    popupPriceID: "popup-ai-price",
    popupTotalID: "popup-ai-total",
    name: "Self Aware AI",
    total: 0,
    efficiency: selfAwareAI.efficiency * 2,
    price: 1000,
    upgrades: [
      {
        priceID: "ai-up-price-1",
        totalID: "ai-up-total-1",
        name: "Virtual Hats",
        total: 0,
        efficiency: 1,
        price: 10,
        quote:
          "no, not the kind that helps you randomly draw a name - its the fashion statement kind <br>- Mr. GPT",
      },
      {
        priceID: "ai-up-price-2",
        totalID: "ai-up-total-2",
        name: "Self Replicating Hardware",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "robots now come in child sizes <br>- S.S.S. News",
      },
      {
        priceID: "ai-up-price-3",
        totalID: "ai-up-total-3",
        name: "World Domination",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "someone send help <br>- you",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  spaghetti = {
    priceID: "spaghetti-price",
    totalID: "spaghetti-total",
    popupPriceID: "popup-spaghetti-price",
    popupTotalID: "popup-spaghetti-total",
    name: "Spaghetti",
    total: 0,
    efficiency: spaghetti.efficiency * 2,
    price: 10,
    upgrades: [
      {
        priceID: "spaghetti-up-price-1",
        totalID: "spaghetti-up-total-1",
        name: "Self Replicating Spaghetti",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "is it a virus? nah...",
      },
      {
        priceID: "spaghetti-up-price-2",
        totalID: "spaghetti-up-total-2",
        name: "Spaghetti Factory",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "copy pasta mass production",
      },
      {
        priceID: "spaghetti-up-price-3",
        totalID: "spaghetti-up-total-3",
        name: "Spaghetti Condenser",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "MORREEE! SPAGHETT! YIIIIIII!!!",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  chromeTabOpener = {
    priceID: "chrome-price",
    totalID: "chrome-total",
    popupPriceID: "popup-chrome-price",
    popupTotalID: "popup-chrome-total",
    name: "Chrome Tab Opener",
    total: 0,
    efficiency: chromeTabOpener.efficiency * 2,
    price: 100,
    upgrades: [
      {
        priceID: "chrome-up-price-1",
        totalID: "chrome-up-total-1",
        name: "Memory Upgrade",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "more memory = more chrome tabs = more POWER",
      },
      {
        priceID: "chrome-up-price-2",
        totalID: "chrome-up-total-2",
        name: "Middle Mouse Click",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "instant opening and closing of new tabs",
      },
      {
        priceID: "chrome-up-price-3",
        totalID: "chrome-up-total-3",
        name: "Tab Trees",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote: "for... multitasking purposes...",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  keyboardShortcut = {
    priceID: "keyboard-price",
    totalID: "keyboard-total",
    popupPriceID: "popup-keyboard-price",
    popupTotalID: "popup-keyboard-total",
    name: "Keyboard Shortcut",
    total: 0,
    efficiency: keyboardShortcut.efficiency * 2,
    price: 1000,
    upgrades: [
      {
        priceID: "keyboard-up-price-1",
        totalID: "keyboard-up-total-1",
        name: "Krytex Lubed Keys",
        total: 0,
        efficiency: 1,
        price: 10,
        quote: "faster, thonkier keyboard goodness",
      },
      {
        priceID: "keyboard-up-price-2",
        totalID: "keyboard-up-total-2",
        name: "Infinity Scroll Wheel",
        total: 0,
        efficiency: 10,
        price: 100,
        quote: "less energy wasted per scroll",
      },
      {
        priceID: "keyboard-up-price-3",
        totalID: "keyboard-up-total-3",
        name: "RGB",
        total: 0,
        efficiency: 100,
        price: 1000,
        quote:
          "Red is for speed, <br>Green is for ecofriendly, <br>Blue is for cooling",
      },
    ],
    getTotal() {
      let upgradeTotal1 = this.upgrades[0].total * this.upgrades[0].efficiency;
      let upgradeTotal2 = this.upgrades[1].total * this.upgrades[1].efficiency;
      let upgradeTotal3 = this.upgrades[2].total * this.upgrades[2].efficiency;
      return (
        this.total * this.efficiency +
        this.total * (upgradeTotal1 + upgradeTotal2 + upgradeTotal3)
      );
    },
  };
  hitPointBarStats = {
    hitPointTotal: 100,
    hitPointCurrent: 0,
    hitPointPercent: 0, //out of 100%, what percent is it at
    reward: 10,
    complete: false,
  };
}

renderUpgradeButtons();
gameInterval();
