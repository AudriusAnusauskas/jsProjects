let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};

let transactionFeePercent = "1%";
let checkInputf;
function klik() {
  checkInputf = document.getElementById("transaction").value;
  // checkInputf = "hello";
}

// function passVal() {
//   klik();
//   checkInput.push(checkInputf);
// }
klik();
console.log(checkInputf);
