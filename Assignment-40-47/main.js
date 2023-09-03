let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse());  //["Osama", "Elham", "Mazero", "Ahmed"]

zero = 0;
counter = 3;
console.log(my.slice(++zero, counter).reverse());  //["Elham", "Mazero"]

zero = 0;
counter = 3;
console.log(`${my[--counter].slice(zero,counter)}${my[1].slice(counter)}`);  //Elzero

zero = 0;
counter = 3;
console.log(`${my[++zero][++counter]}${my[zero][++counter].toUpperCase()}`);   //"rO"

/*--------------------------------------------------------------------- */
/*--------------------------------------------------------------------- */
/*--------------------------------------------------------------------- */

// 040 - 047
// التكليف 01
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/*--------------------------------------------------------------------- */
// التكليف 02
console.log("------------------------------------");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
/*--------------------------------------------------------------------- */
// التكليف 03
console.log("------------------------------------");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr.unshift(arrTwo[2] , arrOne[2], arrOne[1], arrOne[0], arrTwo[1], arrTwo[0]);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
/*--------------------------------------------------------------------- */
// التكليف 04
console.log("------------------------------------");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(`${words[2][0][2].toUpperCase()}${words[2][0][0]}${words[2][0][4].toUpperCase()}${words[2][0][5].toUpperCase()}`); // ZERO


/*--------------------------------------------------------------------- */
// التكليف 05
console.log("------------------------------------");
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.includes(needle)? console.log("Found"): console.log("not found");
haystack.indexOf("JS") !== -1 ? console.log("Found"): console.log("not found");
haystack.lastIndexOf("JS") !== -1 ? console.log("Found"): console.log("not found");

/*--------------------------------------------------------------------- */
// التكليف 06
console.log("------------------------------------");
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let len1 = arr1.length;
let len2 = arr2.length;
len2--;
allArrs.push(arr2[--len2].toLowerCase(), arr1[--len1].toLowerCase());
len2 =  arr2.length;
allArrs.push(arr2[--len2].toLowerCase());
allArrs = allArrs.join("");
console.log(allArrs); // fxy
