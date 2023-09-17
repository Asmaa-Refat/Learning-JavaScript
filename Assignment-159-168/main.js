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

console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 05

// let t0 = performance.now();
// let count5 = 99999;
// let start = 1;
// while(start <= count5) {
//     console.log(start);
//     start++;
// }
// let t1 = performance.now();
// console.log(`Loop Took ${(t1 - t0).toFixed(0)} Milliseconds`);
// Needed Output
// "Loop Took 1921 Milliseconds."

console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 06

// Write Your Generator Function Here
function* gen() {
    yield 14;
    yield 154;
    yield 494;
    yield 1034;
    yield 1774;
    yield 2714;
    yield 3854;
    yield 5194;
    yield 6734;
}

let generator6 = gen();

console.log(generator6.next()); // {value: 14, done: false}
console.log(generator6.next()); // {value: 154, done: false}
console.log(generator6.next()); // {value: 494, done: false}
console.log(generator6.next()); // {value: 1034, done: false}
console.log(generator6.next()); // {value: 1774, done: false}
console.log(generator6.next()); // {value: 2714, done: false}
console.log(generator6.next()); // {value: 3854, done: false}
console.log(generator6.next()); // {value: 5194, done: false}
console.log(generator6.next()); // {value: 6734, done: false}


console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 07

function* genNumbers() {
    let arr = [1, 2, 2, 2, 3, 4, 5];
    let set = new Set(arr);
    yield* set;
}
function* genLetters() {
    let arr = ["A", "B", "B", "B", "C", "D"];
    let set = new Set(arr);
    yield* set;
}

// Write Your Generator Function Here
function* genAll() {
    yield* genNumbers();
    yield* genLetters();
}

let generator7 = genAll();

console.log(generator7.next()); // {value: 2, done: false}
console.log(generator7.next()); // {value: 1, done: false}
console.log(generator7.next()); // {value: 3, done: false}
console.log(generator7.next()); // {value: 4, done: false}
console.log(generator7.next()); // {value: 5, done: false}
console.log(generator7.next()); // {value: "A", done: false}
console.log(generator7.next()); // {value: "B", done: false}
console.log(generator7.next()); // {value: "C", done: false}
console.log(generator7.next()); // {value: "D", done: false}

console.log("-------------------------------");
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
// التكليف 08

import calc from "./mod-one.js"
import {numOne, numTwo, numThree} from "./mod-two.js"

// main.js File
console.log(calc(numOne, numTwo, numThree)); // 60

