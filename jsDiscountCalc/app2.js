let checkInput = "";

function klik() {
  checkInput = input.value;
  console.log(checkInput);
  return checkInput;
}

let input = document.getElementById("transaction");
document.getElementById("button").addEventListener("click", klik);
console.log(input.value);

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
