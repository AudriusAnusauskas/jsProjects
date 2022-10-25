let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["10%", []],
  Circle_K: ["20%", []],
  Ruukki: ["10%", []],
  "7-ELEVEN": ["22%", []],
  Siemens: ["14%", []],
};

let dateStringInput = document.getElementById("date");
date.addEventListener("input", function () {
  let date = new Date(dateStringInput.value).toISOString().slice(0, 10);
  console.log(date);
  return date;
});

let merchantInput = document.getElementById("merchants");
Object.getOwnPropertyNames(merchantsDiscounts).forEach((val) => {
  let option = document.createElement("option");
  option.value = `${val}`;
  option.innerHTML = `${val}`;
  document.getElementById("merchants").appendChild(option);

  merchants.addEventListener("change", function () {
    let merchants = merchantInput.value;
    return merchants;
  });
});

let amountInput = document.getElementById("amount");
amount.addEventListener("change", function () {
  let amount = amountInput.value;
  return amount;
});

let inputTotal = document.getElementById("transaction");
let transactionButton = document.getElementById("transactionButton");
transactionButton.addEventListener("click", function () {
  inputTotal.value = `${date.value} ${merchants.value} ${amount.value}`;
  button.disabled = false;
});

let button = document.getElementById("button");
button.disabled = true;
button.addEventListener("click", () => {
  checkInput = inputTotal.value;
  button.disabled = true;
  dateStringInput.value = "";
  merchantInput.value = "";
  amountInput.value = "";

  document.getElementById("transaction").value = "";
  let check = checkInput.replace(/\s/g, "");

  let dateString, discount, merchant, transactions, transactionsNum;

  function dateToString(input) {
    // Parse date

    dateString = new Date(Date.parse(check.slice(0, 10)))
      .toISOString()
      .slice(0, 10);

    console.log(dateString);
    return dateString;
  }

  //check if weekend

  let weekendDiscount;
  function weekendCheck(input) {
    let dayOfWeek = new Date(Date.parse(check.slice(0, 10))).getDay();
    console.log(dayOfWeek);
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      console.log("it is weekend");
      weekendDiscount = 0;
    } else {
      console.log("it is a workday");
      weekendDiscount = 1;
    }
    return weekendDiscount;
  }

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
          "#p1"
        ).innerText = `Discount for ${merchant} is ${discount}, 
        ${merchant} has made ${transactionsNum} transactions`;
        console.log(transactions, transactionsNum);
      } else if (merchant === undefined) {
        document.querySelector("#p1").innerText = `no such merchant`;
        document.querySelector("#p2").innerText = ` `;
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
  let transactionFeePercent = "1%";
  function feeCalc(mD, cI) {
    weekendCheck(dateToString(cI));
    let merchantDateString = dateString + merchant;
    let amount = check.replace(
      check.substring(0, merchantDateString.length),
      ""
    );
    Number(amount);
    let transactionFee;
    let transactionFeePercentDec = parseFloat(transactionFeePercent) / 100; //1%
    let discountDec = parseFloat(discount) / 100; //personal discount

    let transactions10 = "0%";
    if (transactionsNum > 10) {
      transactions10 = "20%";
    }
    let transactions10dec = parseFloat(transactions10) / 100;
    console.log(transactionsNum);
    transactionFee = (
      (amount * transactionFeePercentDec -
        amount * transactionFeePercentDec * discountDec -
        (amount * transactionFeePercentDec -
          amount * transactionFeePercentDec * discountDec) *
          transactions10dec) *
      weekendDiscount
    ).toFixed(2);
    console.log(typeof transactionFee);

    if (dateString === undefined) {
      dateString = "wrong date";
      console.log(datestring);
    } else if (merchant === undefined) {
      merchant = "wrong merchant";
      console.log(merchant);
    }

    let fee = `${transactionFee}`;
    let feeOutput = `${dateString} ${merchant} ${transactionFee}`;
    document.querySelector(
      "#p2"
    ).innerText = `The transaction fee for ${merchant} is ${fee}`;
    document.querySelector("#p3").innerText = `The fee output is:`;
    document.querySelector("#p4").innerText = ` ${feeOutput}`;
    return [fee, feeOutput];
  }

  console.log(feeCalc(merchantsDiscounts, checkInput));
});
