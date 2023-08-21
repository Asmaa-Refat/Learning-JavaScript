/* Episode 022 second Assignment */
let d = "-100";
let e = "20";
let f = 30;
let g = true;

//only use variables value
//do not use the variable twice

console.log(-d * +e);   //2000
console.log(-d + ((+e)*2) + ++f + ++g);   //173 

// ------------------------------------------------------------------------------------------
// التكليف 01

// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log((((10 * (20 - 15) * 3) - 190) * 10) + 400); // Output: 0
// ------------------------------------------------------------------------------------------
// التكليف 02

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + num + false); // 6

// Soultion Three
console.log(++num + --num - true); // 6

num = 3;
// Soultion Four
console.log(--num + ++num + true); // 6

num = 3;
// Solution Five
console.log(num + --num + true + false); // 6

num = 3;
// Solution Six
console.log(--num + num + true + true); // 6
// ------------------------------------------------------------------------------------------
// التكليف 03

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

num2 = "10";
// Solution Two
console.log(+num2-- + ++num2); // 20

num2 = "10";
// Solution Three
console.log(+num2 + --num2 - +num2 + ++num2); // 20

num2 = "10";
// Solution Four
console.log(+num2 + --num2 - ++num2 + ++num2); // 20
// ------------------------------------------------------------------------------------------
// التكليف 04

let points = 10;

points += (true + true + true) 
console.log(points); // 13


points = 10;

points -= (true + true)
console.log(points); // 8;