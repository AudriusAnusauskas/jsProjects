let merchantsDiscounts = {
  Omni: ["12%", []],
  Telia: ["20%", []],
  Circle_K: ["15%", []],
  Ruukki: ["10%", []],
};

console.log(merchantsDiscounts);
console.log(merchantsDiscounts["Omni"][1]);

let a = 1;

merchantsDiscounts["Omni"][1].push(a);
merchantsDiscounts["Omni"][1].push("a");

console.log(merchantsDiscounts["Omni"][1]);
console.log(merchantsDiscounts["Omni"][1].length);
