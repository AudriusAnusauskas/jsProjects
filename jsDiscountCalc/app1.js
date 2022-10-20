let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};
console.log(merchantsDiscounts["Omni"][1]);
let transactionFeePercent = "1%";

let checkInput = " 2022-09-17 Omnis 1230";
let check = checkInput.replace(/\s/g, "");
let dateString, discount, merchant, transactions, transactionsNum;

function dateToString(input) {
  // Parse date

  dateString = new Date(Date.parse(check.slice(0, 10)))
    .toISOString()
    .slice(0, 10);
  return dateString;
}

//check if weekend

function weekendCheck(input) {
  let dayOfWeek = new Date(Date.parse(check.slice(0, 10))).getDay();
  console.log(dayOfWeek);
  let weekendDiscount;
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("it is weekend");
    weekendDiscount = "10%";
  } else {
    console.log("it is a workday");
    weekendDiscount = "0%";
  }
  return weekendDiscount;
}
console.log(merchantsDiscounts["Omni"][1]);
//check mercant and discount

function merchantDiscount(e) {
  Object.getOwnPropertyNames(e).forEach((val) => {
    if (checkInput.includes(val)) {
      merchant = val;
      discount = e[val][0];
      transactions = e[val][1];
      transactions.push(checkInput);
      transactionsNum = transactions.length;
      document.querySelector(
        "div"
      ).innerText = `Discount for ${merchant} is ${discount}, made ${transactionsNum} transactions`;
      console.log(transactions, transactionsNum);
    } else if (merchant === undefined) {
      document.querySelector("div").innerText = `no such merchant`;
    }
  });
  return [discount, merchant, transactions, transactionsNum];
}
console.log(merchantDiscount(merchantsDiscounts));
console.log(transactions, transactionsNum);
console.log(
  merchantsDiscounts["Omni"][1],
  merchantsDiscounts["Omni"][1].length
);
// Calculate fee

function feeCalc(mD, cI) {
  weekendCheck(dateToString(cI));
  // merchantDiscount(mD);

  let merchantDateString = dateString + merchant;
  let amount = check.replace(check.substring(0, merchantDateString.length), "");
  let transactionFeePercentDec = parseFloat(transactionFeePercent) / 100;
  let discountDec = parseFloat(discount) / 100;
  let mainTransactionFee = (amount * transactionFeePercentDec).toFixed(2);
  let transactionFee = (
    mainTransactionFee -
    mainTransactionFee * discountDec
  ).toFixed(2);
  console.log(transactionFee);
  let fee = `${dateString} ${merchant} ${transactionFee}`;

  if (dateString === undefined) {
    dateString = "wrong date";
    console.log(datestring);
  } else if (transactionFee === NaN) {
    transactionFee = "";
    console.log(transactionFee);
  } else if (merchant === undefined) {
    merchant = "no such merchant";
    console.log(merchant);
  }
  return fee;
}

console.log(feeCalc(merchantsDiscounts, checkInput), transactionsNum);
