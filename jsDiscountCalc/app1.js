let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230", "2021-09-17 Omni 130"]],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};

// let omni = [];

let circlek = [];
console.log(circlek);
let omniNum;
let transactionFeePercent = "1%";

let checkInput = " 2022-09-17 Omni 1230";
let check = checkInput.replace(/\s/g, "");
let dateString, discount, merchant, totalprop;

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

//check mercant and discount

function merchantDiscount(e) {
  Object.getOwnPropertyNames(e).forEach((val) => {
    if (check.includes(val)) {
      discount = `${e[val][0]}`;
      merchant = `${val}`;
      transactions = `${e[val][1]}`; //why string???
      totalprop = `${e[val]}`; // why string???
      // transactions.push(check);
      transactionsNum = transactions.length;
      console.log(
        `Discount for ${merchant} is ${discount} next ${transactions} and ${transactions.length}`
      );
      document.querySelector(
        "div"
      ).innerText = `Discount for ${merchant} is ${discount}`;
    } else if (merchant === undefined) {
      document.querySelector("div").innerText = `no such merchant`;
    }
    // document.querySelector(
    //   "div"
    // ).innerText = `omni array length is  ${omniNum}`;
  });
  console.log(transactions, typeof transactions);
  console.log(transactions.length);
  console.log(totalprop, typeof totalprop);

  return [discount, merchant, transactions, transactionsNum];
}

console.log(merchantDiscount(merchantsDiscounts));

// Calculate fee

function feeCalc(mD, cI) {
  weekendCheck(dateToString(cI));
  merchantDiscount(mD);

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

console.log(feeCalc(merchantsDiscounts, checkInput));
