//  159 - 168
// التكليف 01

let dateNow1 = new Date();
let birthday = new Date("8 13 2001"); // or new Date("8 13 2001");

let dateDifference = dateNow1 - birthday;
console.log(`${(dateDifference / 1000).toFixed(0)} Seconds`);
console.log(`${(dateDifference / 1000 / 60).toFixed(0)} Minutes`);
console.log(`${(dateDifference / 1000 / 60 / 60).toFixed(0)} Hours`);
console.log(`${(dateDifference / 1000 / 60 / 60 / 24).toFixed(0)} Days`);
console.log(`${(dateDifference / 1000 / 60 / 60 / 24 / 30).toFixed(0)} Months`);
console.log(`${(dateDifference / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(0)} Years`);

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 02

let dateNow2 = new Date(0);
let year = dateNow2.setFullYear(dateNow2.getFullYear() + 10);

let afterTenYears = new Date(year);
afterTenYears.setHours(0, 0, 1, 0); // Set time to 00:00:01
console.log(afterTenYears);

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 03

let currentDate3 = new Date();
let currentMonth3 = currentDate3.getMonth();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

currentDate3.setDate(1);
currentDate3.setDate(0);

console.log(currentDate3);

console.log(`Previous Month Is ${months[currentDate3.getMonth()]} And Last Day Is ${currentDate3.getDate()}`);

// Needed Output
// "Thu Aug 31 2023 00:13:20 GMT+0300 (Eastern European Summer Time)"
// "Previous Month Is Aug And Last Day Is 31"


console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 04

let birth1 = new Date("8/13/2001");
let birth2 = new Date("Aug 13, 2001");

let birth3 = new Date();
birth3.setFullYear(2001, 7, 13); 
birth3.setHours(0, 0, 0, 0);

console.log(birth1);
console.log(birth2);
console.log(birth3);
// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"