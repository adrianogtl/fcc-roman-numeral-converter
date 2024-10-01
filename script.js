const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let convertedNumberArr = [];
const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const date = new Date();
const year = date.getFullYear();
number.setAttribute("placeholder", `Ex: ${year}`);

convertBtn.addEventListener("click", () => checkInput());

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});

function checkInput() {
  clear();

  if (number.value === "") {
    output.textContent = "Please enter a valid number.";
    output.classList.add("error");
    return;
  }

  if (number.value < 1) {
    output.textContent = "Please enter a number greater than or equal to 1.";
    output.classList.add("error");
    return;
  }

  if (number.value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999.";
    output.classList.add("error");
    return;
  }

  output.classList.remove("error");
  convertToRomanNumeral(number.value);
  displayRomanNumeral();
  return;
}

function clear() {
  output.textContent = "";
  convertedNumberArr = [];
}

function convertToRomanNumeral(number) {
  for (let key in romanNumerals) {
    while (number >= romanNumerals[key]) {
      number -= romanNumerals[key];
      convertedNumberArr.push(key);
    }
  }
  return;
}

function displayRomanNumeral() {
  for (let i = 0, len = convertedNumberArr.length; i < len; i++) {
    output.textContent += convertedNumberArr[i];
  }
}
