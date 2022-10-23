let checkInput = [];
let checkInputf;

let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};

let transactionFeePercent = "1%";

function klik() {
  checkInputf = document.getElementById("transaction").value;
  // checkInputf.submit(); // Submit
  // checkInputf.reset(); // Reset
  return false; // Prevent page refresh
}

function passVal() {
  klik();
  checkInput.push(checkInputf);
}

console.log(checkInput, checkInput[0]);
