let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("unknown");

let st = "Elzero web School";
console.log(st.length);

if ((st.length + st.length).toString() === "34") {
  console.log("Good1");
}

if (st.slice(st.indexOf("w"), st.indexOf("w") + 1).toLowerCase() === "w") {
  console.log("Good2");
}

if (typeof st === "string") {
  console.log("Good3");
}

if (typeof st.length === "number") {
  console.log("Good4");
}

if (`${st.slice(st.indexOf("Elzero"), 6).repeat(2)}` === "ElzeroElzero") {
  console.log("Good5");
}

/* ------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------ */

// 031 - 032
// التكليف 01

console.log("--------------------------------");

console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(+-50 <= +"-40"); // true
console.log(+10 <= -"-40"); // true
console.log(+"10" === +10); // true
console.log(+20 > false); // true

/* ------------------------------------------------------------------------------ */
//التكليف 02
let num1 = 10;
let num2 = 20;

console.log("--------------------------------");
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 && num2 >= num1); // true
console.log(num2 >= num2); // true
console.log(num1 === num1); // true

/* ------------------------------------------------------------------------------ */
//التكليف 03

let a1 = 20;
let b = 30;
let c = 10;

console.log("--------------------------------");
console.log((a1 > b && a1 < c) || a1 < b); // true
console.log(((a1 != b) != a1) != c); // true
console.log(!(a1 > b) && !(a1 > b) && !(a1 == c) && !(a1 == c)); // true
/* ------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------ */

// 033 - 037
// التكليف 01

// Test Case 1
let numm1 = 9; // "009"
// Test Case 2
let numm2 = 20; // "020"
// Test Case 3
let numm = 110; // "110"

console.log("--------------------------------");

numm < 10
  ? console.log(`00${numm}`)
  : numm > 10 && numm < 100
  ? console.log(`0${numm}`)
  : console.log(numm);
/* ------------------------------------------------------------------------------ */
// التكليف 02
console.log("--------------------------------");

let nm1 = 9;
let str = "9";
let str2 = "20";

if (nm1 == str) {
  console.log(`${nm1} Is The Same Value As ${str}`);
}

if (nm1 == str && typeof nm1 !== typeof str) {
  console.log(`{nm1} Is The Same Value As {str} But Not The Same Type`);
}

if (nm1 !== str2 && typeof nm1 !== typeof str2) {
  console.log(`{nm1} Is Not The Same Value Or The Same Type As {str2}`);
}

if (str !== str2 && typeof str === typeof str2) {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}

// Needed Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");
/* ------------------------------------------------------------------------------ */

// التكليف 03
console.log("--------------------------------");

let num11 = 10;
let num22 = 30;
let num33 = "30";

if (num33 > num11 && typeof num33 !== typeof num22) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );

  if (num33 == num22) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
  }

  if (num33 !== num11) {
    console.log(
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    );
  }
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

/* ------------------------------------------------------------------------------ */

// التكليف 04
console.log("--------------------------------");

// Edit What You Want Here

let num111 = 20;
let num222 = 1;
let num333 = 20;
let num444 = 60;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num111 > num222) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num111 > num222 && num111 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num111 > num222 && num111 === num333) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num111 + num222 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num111 + num333 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num111 + num222 + num333 < num444) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num444 - (num111 + num333) + num222 === 21) {
  console.log("True");
} else {
  console.log("False");
}

/* ------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------ */

//038 - 039
// التكليف 01
console.log("--------------------------------");

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
day = day.slice(0,1).toUpperCase() + day.slice(1);

switch(day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
    break;
}