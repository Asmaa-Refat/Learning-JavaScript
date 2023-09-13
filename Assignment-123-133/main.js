// 123 - 133
// التكليف 01

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size-1]);
// Needed Output
//Set(3) {10, 20, 2}
//2

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 02
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()));
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 03

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let map3 = new Map(Object.entries(myInfo));
console.log(map3);
console.log(map3.size);
console.log(map3.has("role"));

// Needed Output
//Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//3
//true

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 04

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].copyWithin(1,2).slice(0,3).join(""));
// Needed Output
//123


console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 05
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Array.from(new Set(theName)));
console.log([...new Set(theName)]);

// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 06

//let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
//let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let frontArray = [];
let withoutNumbers = chars.filter((e)=> typeof e === 'string');
let lenOfNumbers = chars.length - withoutNumbers.length;

for(let i = 0; i < lenOfNumbers; i++) {
    frontArray.push(withoutNumbers[i]);
}

console.log([...frontArray, ...withoutNumbers]);
// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
//["Z", "Y", "Z", "Y", "A", "D", "E"]

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 07

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));

numsOne.push(...numsTwo)
console.log(numsOne);


// Needed Output
//[1, 2, 3, 4, 5, 6]

console.log("- ------------ -");

/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
// التكليف 08