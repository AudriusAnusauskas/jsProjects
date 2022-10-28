export function getTransaction() {
  // use this function to get values from html input
  let transaction = document.getElementById("transaction");
  return transaction;
}
// console.log(inputTotal);

export function updateFee() {
  getTransaction();
  let transactionButton = document.getElementById("button");
  transactionButton.addEventListener("click", function () {
    console.log(transaction.value);
    return "2018-09-04 CIRCLE_K 50";
  });
}

updateFee();
