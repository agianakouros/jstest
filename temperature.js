const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


let origin = "";
let destination = "";
let temp = null;
let temp2;

console.log()

while (origin !== "c" && origin !== "f" && origin !== "k") {
  origin = (readlineSync.question("Enter an origin scale: ")).toLowerCase();
}

while (destination !== "c" && destination !== "f" && destination !== "k") {
  destination = (readlineSync.question("Enter a destination scale: ")).toLowerCase();
}

while (temp > MAX || temp < MIN || temp === null) {
  temp = (readlineSync.question("Enter a temperature: "));
  temp2 = (temp).toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 1})
}

if (origin === "c"){
  if (destination = "f"){
temp = (temp * (9 / 5)) + 32
console.log(temp)
  } else if (destination = "k"){
temp = temp + 273.15
console.log(temp)
  }
} else if (origin === "f"){
  if (destination = "c"){
temp = (temp - 32) * (5 / 9)
console.log(temp)
  } else if (destination = "k"){
temp = (temp - 32) * (5 / 9) + 273.15
console.log(temp)
} else if (origin === "k"){
    if (destination = "c"){
  temp = temp - 273.15
  console.log(temp)
} else if (destination = "f"){
  temp = (temp - 273.15) * (5 / 9) + 32
  console.log(temp)
    }
  }
}
