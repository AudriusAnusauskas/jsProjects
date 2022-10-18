let merchantsDiscounts = {
  Omni: "12%",
  Telia: "20%",
  Circle_K: "15%",
  Ruukki: "10%",
};

// let checkInput = "2022-09-17 Ruukki 500.08";
let checkInput;
function transactionSubmit() {
  checkInput = document.querySelector("input").value;
  console.log(checkInput);
  document.getElementById("div").innerHTML = checkInput;

  checkInput.value = "";

  console.log(checkInput);
  let check = checkInput.replace(/\s/g, "");
  // Parse date
  let dateFromCheck = Date.parse(check.slice(0, 10));
  let date = new Date(dateFromCheck);
  let dateString = date.toISOString().slice(0, 10);
  console.log("-------", dateString);

  //check if weekend
  let dayOfWeek = date.getDay();

  console.log(dayOfWeek);
  let weekendDiscount;
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("it is weekend");
    weekendDiscount = "10%";
  } else {
    console.log("it is a workday");
    weekendDiscount = 0;
  }

  //check mercant and discount
  let discount, merchant;
  function merchantDiscount(e) {
    Object.getOwnPropertyNames(e).forEach((val) => {
      if (check.includes(val)) {
        discount = `${e[val]}`;
        merchant = `${val}`;
        console.log(`Discount for ${val} is ${e[val]}`);
        document.querySelector(
          "div"
        ).innerText = `Discount for ${merchant} is ${discount}`;
      } else if (discount === undefined) {
        document.querySelector("div").innerText = `no such merchant`;
      }
    });
  }

  merchantDiscount(merchantsDiscounts);
  console.log("ddddddfffffffff", discount, typeof discount);

  // Calculate discount

  let merchantDateString = dateString + merchant;
  let amount = check.replace(check.substring(0, merchantDateString.length), "");
  let discountDec = parseFloat(discount) / 100;
  let payment1 = (amount - amount * discountDec).toFixed(2);

  console.log(amount, payment1, discount, parseFloat(discount) / 100);
}
