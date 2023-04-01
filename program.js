const app = () => {
  //Selectors
  const spriteButton = document.getElementById("sprite-button");
  const counter = document.querySelector("counter");

  function incrementCounter(currentCount) {
    return currentCount++;
  }
  let x = 0;

  setTimeout(() => {
    console.log("delay");
  }, "1000");
};
app();
// window.onload = function () {
//   var x = 0,
//     max = 3000,
//     ctr = document.getElementById("counter");

//   function incrementCounter() {
//     ctr.innerHTML = x;
//     if (x++ < max) {
//       setTimeout(incrementCounter, 100);
//     }
//   }
//   incrementCounter();
// };
