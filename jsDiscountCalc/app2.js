let checkInput;

function klik() {
  checkInputf = input.value;
  console.log(checkInputf);
  checkInput = checkInputf;
  return checkInputf;
}
document.getElementById("button").addEventListener("click", klik);
let input = document.getElementById("transaction");

console.log(checkInput, typeof checkInput);

// console.log(input.value);
// checkInput = checkInputf;
// function submitMe(id) {
//   checkInput = document.getElementById(id).value;
// }
let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};

let transactionFeePercent = "1%";

function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}

console.log(random(4));
