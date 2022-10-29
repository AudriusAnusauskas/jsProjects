export function getTransaction() {
  // use this function to get values from html input
  let transaction = document.getElementById("transaction");
  return transaction.value;
}
// console.log(inputTotal);

export function updateFee() {
  let transactionButton = document.getElementById("button");
  transactionButton.addEventListener("click", function () {
    console.log(getTransaction());
    return "2018-09-04 CIRCLE_K 50";
  });
}

updateFee();
