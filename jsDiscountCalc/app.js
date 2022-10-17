let check = "2022-09-17 Telia 50.00";

let merchantsDiscounts = {
  Omni: "12%",
  Telia: "20%",
  CircleK: "15%",
  Ruukki: "10%",
};
// Parse date
let date = new Date(Date.parse(check.slice(0, 10)));

console.log(date);

//check if weekend
let dayOfWeek = date.getDay();

console.log(dayOfWeek);

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("it is weekend");
} else {
  console.log("it is a workday");
}

//check mercant and discount for it
Object.getOwnPropertyNames(merchantsDiscounts).forEach((val) => {
  if (check.includes(val)) {
    console.log(`Discount for ${val} is ${merchantsDiscounts[val]}`);
  }
});
