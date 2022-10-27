export function getTransaction() {
  // use this function to get values from html input
  let inputTotal = document.getElementById("transaction");
  let transactionButton = document.getElementById("transactionButton");
  transactionButton.addEventListener("click", function () {
    inputTotal.value = `${date.value} ${merchants.value} ${amount.value}`;
    return "2018-09-04 CIRCLE_K 50";
  });
}

export function updateFee(transaction, fee) {
  // use this function to get values from html input
  console.log(fee);
}
