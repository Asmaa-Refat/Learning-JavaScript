/* #026 - Number Challenge */
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d)));


// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// Get Integer "2" From 'd' Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));


// Use Variables b + d just one time To Get These Values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.trunc(b) / Math.ceil(d)).toFixed(2))); // 67 => Number

/* -------------------------------------------------------------------- */
/* #030 - Number Challenge */

let aa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(aa.slice(2,6).charAt(0).toUpperCase() + aa.slice(3,6));  // Zero

// 8 H
console.log(aa.slice(13,14).toUpperCase().repeat(8));     // HHHHHHHH
console.log("H".repeat(8));     // HHHHHHHH


// Return Array
console.log(aa.split(" ", 1));       // ["Elzero"]


// Use Only "substr" Method + Template Literals In Your Solution
console.log(aa.substr(0, 7) + aa.substr(11, 17));      // Elzero School


// Solution Must Be Dynamic Because String May Changes
console.log(aa.charAt(0).toLowerCase() + aa.slice(1, aa.length-1).toUpperCase() + aa.charAt(aa.length-1).toLowerCase());        // eLZERO WEB SCHOOl

/* ---------------------------------------------------------------------- */
/*  023 - 026  */
/* التكليف 01 */

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_00000); // 100000
console.log(10_0000); // 100000
console.log(100_000); // 100000
console.log(1000_00); // 100000
console.log(10000_0); // 100000
console.log(100000); // 100000
console.log(7e4 + 3e4); // 100000
console.log(6e4 + 4e4); // 100000
console.log(4e4 + 6e4); // 100000
console.log(3e4 + 7e4); // 100000
console.log(2e4 + 8e4); // 100000
console.log(1e4 + 9e4); // 100000

/* ---------------------------------------------------------------------- */
/* التكليف 02 */

//إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال

console.log(0-Number.MIN_SAFE_INTEGER); // 9007199254740991
/* ---------------------------------------------------------------------- */
/* التكليف 03 */

//بسطر واحد فقط إستخدم MAX_SAFE_INTEGER لتخرج بالنتيجة رقم 16 بدون إستعمال أي أرقام

console.log(+Number.MAX_SAFE_INTEGER.toString().charAt(0) + +Number.MAX_SAFE_INTEGER.toString().charAt(3)); // 16
/* ---------------------------------------------------------------------- */
/* التكليف 04 */

let myVar = "100.56789 Views";

console.log(myVar.substring(0, 4)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
/* ---------------------------------------------------------------------- */

/* التكليف 05 */

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
/* ---------------------------------------------------------------------- */

/* التكليف 06 */

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt));   // 10
console.log(parseFloat(flt).toFixed(0)); // 10
console.log(flt.toFixed(0)); // 10
/* ---------------------------------------------------------------------- */

/* التكليف 07 */
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4 
/* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */

/* 027 - 030 */
// التكليف 01
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName[0].repeat(3).toLowerCase()); // eee
/* ---------------------------------------------------------------------- */

// التكليف 02
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
