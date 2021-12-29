// Add Your Code Here..
//Project completed by Aris Fornasari & Nathan Jolteus//

let number = document.querySelector(".disc1");
let number2 = document.querySelector(".disc2");
let number3 = document.querySelector(".disc3");
let number4 = document.querySelector(".disc4");

let number1 = document.querySelector(".cart");
console.log(number1);
let towerA = document.querySelector(".towerA");
let towerB = document.querySelector(".towerB");
let towerC = document.querySelector(".towerC");

let clickMode = "empty";
let selectedDisc;
let pez = function (event) {
  if (clickMode === "empty") {
    console.log(event.target);
    console.log(event.currentTarget);
    let selectedTower = event.currentTarget;
    selectedDisc = selectedTower.firstElementChild;

    clickMode = "full";
  } else {
    console.log(selectedDisc);
    console.log(event.target);
    console.log(event.currentTarget);
    let selectedTower = event.currentTarget;
    if (selectedTower.childElementCount === 0) {
      selectedTower.prepend(selectedDisc);
    } else if (
      selectedTower.firstElementChild.clientWidth > selectedDisc.clientWidth
    ) {
      selectedTower.prepend(selectedDisc);
    }
    clickMode = "empty";
  }
  if (towerC.childElementCount === 4) {
    window.alert("YOU WIN !");
  }
};
towerA.addEventListener("click", pez);
towerB.addEventListener("click", pez);
towerC.addEventListener("click", pez);
