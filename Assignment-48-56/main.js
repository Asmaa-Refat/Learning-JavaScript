let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amged",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let x = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  x++;
}

document.write(`<div> We Have ${x} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < x; i++) {
  document.write(`<div>
                        The Admin for Team ${i + 1} is ${myAdmins[i]} 
                        <h3>Team Members: </h3>
                    `);
  let iter = 0;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      iter++;
      document.write(`<p>- ${iter} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div> <hr>`);
}

/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
// 048 - 053
// التكليف 01
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;

  console.log(i);
}

/* ------------------------------------------------------------------------------------- */
// التكليف 02
let start1 = 10;
let end1 = 0;
let stopp = 3;

console.log("------------------------------------");
for (let i = start1; i >= stopp; i--) {
  if (i < start1) {
    console.log(`0${i}`);
  } else {
    console.log(i);
  }
}
/* ------------------------------------------------------------------------------------- */
// التكليف 03
console.log("------------------------------------");
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
  console.log(i);
  console.log(`-- ${breaker}`);
  console.log(`-- ${breaker + breaker}`);
}

/* ------------------------------------------------------------------------------------- */
// التكليف 04
let index = 10;
let jump = 2;

console.log("------------------------------------");

for (;;) {
  // Write Your Code Here
  console.log(index);
  index -= jump;
  if (index <= jump) break;
}

/* ------------------------------------------------------------------------------------- */
// التكليف 05
console.log("------------------------------------");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let temp = letter.length;

for (let i = --letter.length; i < friends.length; i++) {
  if (!friends[i].toLowerCase().startsWith(`${letter}`)) {
    console.log(`${temp} => ${friends[i]}`);
    temp++;
  }
}

/* ------------------------------------------------------------------------------------- */
// التكليف 06
console.log("------------------------------------");
let start6 = 0;
let swappedName = "elZerO";
let result = "";
for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}
console.log(result);

/* ------------------------------------------------------------------------------------- */
// التكليف 07
console.log("------------------------------------");

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = mix[0]; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */

//054 - 056
// التكليف 01
console.log("------------------------------------");

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;
let letter7 = friends1[counter][counter];

while (index1 < friends1.length) {
  if (
    typeof friends1[index1] === "string" &&
    !friends1[index1].startsWith(letter7)
  ) {
    console.log(`${++counter} => ${friends1[index1]}`);
  }
  index1++;
}
