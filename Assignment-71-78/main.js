/*
you can use:
- ,
- _
- Space
- True => one time only in the code

you cannot use:
- Numbers 
- Letters

You must use [filter - map - reduce - your knowledge]
All in one chain
order is not important
 */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split(",")
//   .filter((ele) => {
//     return isNaN(parseInt(ele));
//   })
//   .reduce((accumelator, current) => {
//     return accumelator + current;
//   })
//   .split("_")
//   .join(" ");

// more efficient way
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",")
  .filter((ele) => {
    return isNaN(parseInt(ele));
  })
  .map((ele) => {
    return ele === '_' ? " " : ele;
  })
  .reduce((accumelator, current) => {
    return accumelator + current;
  })

console.log(solution.slice(true, --solution.length)); //Elzero Web School
/* ----------------------------------------------------------------- */
/* ----------------------------------------------------------------- */
/* ----------------------------------------------------------------- */
// 071 - 078
// التكليف 01

console.log("-----------------------------------");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newMix = mix.map((ele)=>{
    return !isNaN(parseInt(ele))? "": ele;
}).reduce((acc, curr) => {
    return `${acc}${curr}`;
})

console.log(newMix); // Elzero
/* ----------------------------------------------------------------- */
// التكليف 02
console.log("-----------------------------------");
let myString2 = "EElllzzzzzzzeroo";
let new2 = myString2.split("").filter((ele,index,arr) => {
    return arr[index] !== arr[++index];
}).join("");

console.log(new2); // Elzero

/* ----------------------------------------------------------------- */
// التكليف 03
console.log("-----------------------------------");

let myArray3 = ["E", "l", "z", ["e", "r"], "o"];
let new3 = myArray3.map((ele) => {
    return typeof ele === "object" ? ele.join('') : ele;
})
.reduce((acc, curr) => {
    return acc + curr;
})
console.log(new3); // Elzero


/* ----------------------------------------------------------------- */
// التكليف 04
console.log("-----------------------------------");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numsOnly = numsAndStrings.filter((ele) => {
    return !isNaN(parseInt(ele));
})
.map((ele) => {
    return -ele;
})

console.log(numsOnly);    // [-1, -10, 10, 20, -5, -3]
/* ----------------------------------------------------------------- */
// التكليف 05
console.log("-----------------------------------");

let nums5 = [2, 12, 11, 5, 10, 1, 99];

let new5 = nums5.reduce((acc, curr) => {
    return curr % 2 !== 0? acc + curr : acc * curr;
}, 1)

console.log(new5);    // 500

