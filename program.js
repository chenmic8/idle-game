//Declare variables
let playerName;
let intervalId;
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
const playerNameInput = document.querySelector("#intro-screen input");
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
const selfMadeMoney = document.querySelector("#self-made-money");
const spaghettiCountDisplay = document.querySelector("#spaghetti-count"); //price and count DIVS
const spaghettiPriceDisplay = document.querySelector("#spaghetti-price");
const chromeTabOpenerCountDisplay = document.querySelector("#chrome-count");
const chromeTabOpenerPriceDisplay = document.querySelector("#chrome-price");
const keyboardShortcutCountDisplay = document.querySelector("#keyboard-count");
const keyboardShortcutPriceDisplay = document.querySelector("#keyboard-price");
const upgradesContainer = document.getElementById("upgrades-container");
const employeesContainer = document.querySelector("#employees-container");

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
    efficiency: 1,
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
// function renderPassiveEmployees() {
//   for (employee of passiveEmployees) {
//     //create elements for employees
//     const employeeContainer = document.createElement("div");
//     const employeePopupContainer = document.createElement("div");
//     const popupImg = document.createElement("img");
//     const popupInformationContainer = document.createElement("div");
//     const popupemployeeName = document.createElement("h2");
//     const lineBreak = document.createElement("hr");
//     const popupPriceText = document.createElement("p");
//     const popupPriceSpan = document.createElement("span");
//     const popupTotalText = document.createElement("p");
//     const popupTotalSpan = document.createElement("span");
//     const unorderedList = document.createElement("ul");
//     const statistic1 = document.createElement("li");
//     const statistic2 = document.createElement("li");
//     const employeeImg = document.createElement("img");
//     const employeeInformationContainer = document.createElement("div");
//     const employeeName = document.createElement("p");
//     const priceSpan = document.createElement("span");
//     const totalSpan = document.createElement("span");

//     //set attributes of elements of employees
//     employeeContainer.setAttribute("class", "employee-container employee");
//     employeeContainer.setAttribute(
//       "onclick",
//       `buyEmployee("${employee.name}")`
//     );
//     employeePopupContainer.setAttribute("class", "employee-popup");
//     popupImg.setAttribute("class", "employee-icon");
//     popupImg.setAttribute("src", "./images/cog.png");
//     popupImg.setAttribute("alt", employee.name);
//     popupemployeeName.textContent = employee.name;
//     popupPriceText.textContent = "Price: ";
//     popupPriceSpan.textContent = employee.price;
//     popupPriceSpan.setAttribute("id", employee.popupPriceID);
//     popupPriceSpan.setAttribute("class", "dollar");
//     popupTotalText.textContent = "Owned: ";
//     popupTotalSpan.textContent = "0";
//     popupTotalSpan.setAttribute("id", employee.popupTotalID);
//     statistic1.textContent = `Each ${employee.name} produces ${employee.efficiency} per second`;
//     statistic2.textContent = `${employee.total} ${
//       employee.name
//     }s producing ${employee.getTotal()} per second`;
//     employeeImg.setAttribute("class", "employee-icon");
//     employeeImg.setAttribute("src", "./images/cog.png"); //WHEN ART DONE: this should be from a value in data objects
//     employeeImg.setAttribute("alt", employee.name);
//     employeeInformationContainer.setAttribute(
//       "class",
//       "employee-information-container"
//     );
//     employeeName.textContent = employee.name;
//     priceSpan.textContent = employee.price;
//     priceSpan.setAttribute("id", employee.priceID);
//     priceSpan.setAttribute("class", "dollar");
//     totalSpan.textContent = "0";
//     totalSpan.setAttribute("id", employee.totalID);

//     //combine nodes of employes
//     employeesContainer.appendChild(employeeContainer);
//     employeeContainer.appendChild(employeePopupContainer);
//     employeePopupContainer.appendChild(popupImg);
//     employeePopupContainer.appendChild(popupInformationContainer);
//     popupInformationContainer.appendChild(popupemployeeName);
//     popupInformationContainer.appendChild(lineBreak);
//     popupInformationContainer.appendChild(popupPriceText);
//     popupPriceText.appendChild(popupPriceSpan);
//     popupInformationContainer.appendChild(popupTotalText);
//     popupTotalText.appendChild(popupTotalSpan);
//     popupInformationContainer.appendChild(unorderedList);
//     unorderedList.appendChild(statistic1);
//     unorderedList.appendChild(statistic2);
//     employeeContainer.appendChild(employeeImg);
//     employeeContainer.appendChild(employeeInformationContainer);
//     employeeInformationContainer.appendChild(employeeName);
//     employeeInformationContainer.appendChild(priceSpan);
//     employeeContainer.appendChild(totalSpan);
//   }
// }
// function renderActiveEmployees() {
//   for (employee of activeEmployees) {
//     //create elements
//     const employeeContainer = document.createElement("div");
//     const employeePopupContainer = document.createElement("div");
//     const popupImg = document.createElement("img");
//     const popupInformationContainer = document.createElement("div");
//     const popupemployeeName = document.createElement("h2");
//     const lineBreak = document.createElement("hr");
//     const popupPriceText = document.createElement("p");
//     const popupPriceSpan = document.createElement("span");
//     const popupTotalText = document.createElement("p");
//     const popupTotalSpan = document.createElement("span");
//     const unorderedList = document.createElement("ul");
//     const statistic1 = document.createElement("li");
//     const statistic2 = document.createElement("li");
//     const employeeImg = document.createElement("img");
//     const employeeInformationContainer = document.createElement("div");
//     const employeeName = document.createElement("p");
//     const priceSpan = document.createElement("span");
//     const totalSpan = document.createElement("span");

//     //set attributes of elements
//     employeeContainer.setAttribute("class", "employee-container employee");
//     employeeContainer.setAttribute(
//       "onclick",
//       `buyEmployee("${employee.name}")`
//     );
//     employeePopupContainer.setAttribute("class", "employee-popup");
//     popupImg.setAttribute("class", "employee-icon");
//     popupImg.setAttribute("src", "./images/cog.png");
//     popupImg.setAttribute("alt", employee.name);
//     popupemployeeName.textContent = employee.name;
//     popupPriceText.textContent = "Price: ";
//     popupPriceSpan.textContent = employee.price;
//     popupPriceSpan.setAttribute("id", employee.popupPriceID);
//     popupPriceSpan.setAttribute("class", "dollar");
//     popupTotalText.textContent = "Owned: ";
//     popupTotalSpan.textContent = "0";
//     popupTotalSpan.setAttribute("id", employee.popupTotalID);
//     statistic1.textContent = `Each ${employee.name} produces ${employee.efficiency} per click`;
//     statistic2.textContent = `${employee.total} ${
//       employee.name
//     }s producing ${employee.getTotal()} per click`;
//     employeeImg.setAttribute("class", "employee-icon");
//     employeeImg.setAttribute("src", "./images/cog.png"); //WHEN ART DONE: this should be from a value in data objects
//     employeeImg.setAttribute("alt", employee.name);
//     employeeInformationContainer.setAttribute(
//       "class",
//       "employee-information-container"
//     );
//     employeeName.textContent = employee.name;
//     priceSpan.textContent = employee.price;
//     priceSpan.setAttribute("id", employee.priceID);
//     priceSpan.setAttribute("class", "dollar");
//     totalSpan.textContent = "0";
//     totalSpan.setAttribute("id", employee.totalID);

//     //combine nodes
//     employeesContainer.appendChild(employeeContainer);
//     employeeContainer.appendChild(employeePopupContainer);
//     employeePopupContainer.appendChild(popupImg);
//     employeePopupContainer.appendChild(popupInformationContainer);
//     popupInformationContainer.appendChild(popupemployeeName);
//     popupInformationContainer.appendChild(lineBreak);
//     popupInformationContainer.appendChild(popupPriceText);
//     popupPriceText.appendChild(popupPriceSpan);
//     popupInformationContainer.appendChild(popupTotalText);
//     popupTotalText.appendChild(popupTotalSpan);
//     popupInformationContainer.appendChild(unorderedList);
//     unorderedList.appendChild(statistic1);
//     unorderedList.appendChild(statistic2);
//     employeeContainer.appendChild(employeeImg);
//     employeeContainer.appendChild(employeeInformationContainer);
//     employeeInformationContainer.appendChild(employeeName);
//     employeeInformationContainer.appendChild(priceSpan);
//     employeeContainer.appendChild(totalSpan);
//   }
// }
// renderPassiveEmployees();
// renderActiveEmployees();

function fromNameSelectToGameInterface() {
  playerName = playerNameInput.value;
  playerNameDisplay1.textContent = playerName;
  playerNameDisplay2.textContent = playerName;
  introScreen.classList.add("hidden");
  wrapper.classList.remove("hidden");
}
function fromStartScreenToNameSelect() {
  playBtn.classList.add("hidden");
  gameTitle.classList.add("hidden");
  submitNameContainer.classList.remove("hidden");
}

function updateDOMOnClick() {
  countDisplay.textContent = global.count.current;
  moneyInBank.textContent = global.count.current;
  moneyAllTime.textContent = global.count.allTime;
  moneyThisAscension.textContent = global.count.thisAscension;
}
function updateDOMOnInterval() {
  countDisplay.textContent = global.count.current;
  moneyInBank.textContent = global.count.current;
  moneyAllTime.textContent = global.count.allTime;
  moneyThisAscension.textContent = global.count.thisAscension;
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
  incrementAllGlobalCount(increment);
  updateDOMOnClick();
}

function incrementPassive() {
  console.log("increment passive"); //TO DO!!!! make similar to incrementClick()
  let increment =
    codeMonkey.getTotal() + expertGoogler.getTotal() + selfAwareAI.getTotal();
  incrementAllGlobalCount(increment);
  updateDOMOnInterval();
}
function gameInterval() {
  intervalId = setInterval(() => {
    incrementPassive();
  }, 1000);
}
gameInterval();

function subtractMoneyFromBank(value) {
  global.count.current -= value;
  countDisplay.textContent = global.count.current;
  moneyInBank.textContent = global.count.current;
}

//buy employee
function buyEmployee(name) {
  console.log("here");
  let employee = whichEmployee(name);
  const popupPriceDisplay = document.getElementById(employee.popupPriceID);
  const popupTotalDisplay = document.getElementById(employee.popupTotalID);
  const priceDisplay = document.getElementById(employee.priceID);
  const totalDisplay = document.getElementById(employee.totalID);
  const popupInformationContainer = totalDisplay.parentElement.parentElement;
  const statistic1 = popupInformationContainer.querySelectorAll("li")[0];
  const statistic2 = popupInformationContainer.querySelectorAll("li")[1];
  if (employee.price <= global.count.current) {
    employee.total++;
    subtractMoneyFromBank(employee.price);
    employee.price = Math.floor(employee.price * 1.2);
    popupPriceDisplay.textContent = employee.price;
    popupTotalDisplay.textContent = employee.total;
    priceDisplay.textContent = employee.price;
    totalDisplay.textContent = employee.total;
    statistic1.textContent = `Each ${
      employee.name
    } produces ${employee.getTotal()} per action`;
    statistic2.textContent = `${employee.total} ${
      employee.name
    }s producing ${employee.getTotal()} per action`;
  } else {
    console.log("not enough money");
  }
}

// function buyUpgrade(upgrade) {
//   console.log("here");
//   // if (upgrade.price <= global.count.current) {
//   //   upgrade.total++;
//   //   subtractMoneyFromBank(upgrade.price);
//   // } else {
//   //   console.log("not enough money");
//   // }
// }

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

function buyUpgrade(name, upgradeIndex) {
  let employee = whichEmployee(name);
  let upgrade = employee.upgrades[upgradeIndex];
  const upgradePriceDisplay = document.getElementById(upgrade.priceID);
  const upgradeTotalDisplay = document.getElementById(upgrade.totalID);
  const totalDisplay = document.getElementById(employee.totalID);

  const popupInformationContainer = totalDisplay.parentElement.parentElement;
  const statistic1 = popupInformationContainer.querySelectorAll("li")[0];
  const statistic2 = popupInformationContainer.querySelectorAll("li")[1];
  //check if have enough money to buy the upgrade
  if (upgrade.price <= global.count.current) {
    subtractMoneyFromBank(upgrade.price);
    upgrade.total++;
    upgrade.price *= 1.2;
    upgradePriceDisplay.textContent = upgrade.price;
    upgradeTotalDisplay.textContent = upgrade.total;
    statistic1.textContent = `Each ${
      employee.name
    } produces ${employee.getTotal()} per action`;
    statistic2.textContent = `${employee.total} ${
      employee.name
    }s producing ${employee.getTotal()} per action`;
    console.log(employee);
  } else {
    console.log("not enough money");
  }
}

// function addEmployee(employee) {
//   employee.total++;
// }

// function buySpaghetti() {
//   if (spaghetti.price <= global.count.current) {
//     spaghetti.total++;
//   } else {
//     console.log("not enough money");
//   }
//   spaghettiCountDisplay.textContent = spaghetti.total;
// }

// function upgradeSpaghetti(upgradeIndex) {
//   spaghetti.upgrades[upgradeIndex].total++;
//   console.log(spaghetti);
//   // console.log(spaghetti.getTotal());
// }

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

renderUpgradeButtons();
