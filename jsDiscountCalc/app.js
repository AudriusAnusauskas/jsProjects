let check = "2022-09-17 Telia 50.00";

let date = new Date(Date.parse(check.slice(0, 10)));

console.log(date);

let dayOfWeek = date.getDay();

console.log(dayOfWeek);

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("it is weekend");
} else {
  console.log("it is a workday");
}
