let merchantsDiscounts = {
  Omni: ["12%", ["2022-09-17 Omni 1230"]],
  Telia: ["10%", []],
  Circle_K: ["20%", []],
  Ruukki: ["10%", []],
  "7-ELEVEN": ["22%", []],
  Siemens: ["14%", []],
};

class Rule {
  calculateDiscountPercent() {
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
    return 0;
  }

  calculateDiscountFlatAmount() {
    return 0;
  }

  apply() {
    return {
      discountPercent: this.calculateDiscountPercent(),
      discountFlatAmount: this.calculateDiscountFlatAmount(),
    };
  }
}

export default Rule;
