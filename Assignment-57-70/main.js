


/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
//regular function (anonymous)
let names = function(...names) {
    return `String [${names.join("] , [")}]`;
}

// arrow function
let namesFun = (...names) => `String [${names.join("], [")}] => Done !`;


console.log(namesFun("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama] , [Mohamed] , [Ali] , [Ibrahim] => Done !
/* --------------------------------------------------------------------------------------------- */
let myNumbers = [20, 50, 10, 60];

// arrow function
let calc = (one, two, ...nums) => +one+ +two+ +nums;

//regular function (anonymous)
let calc1 = function(one, two, ...nums) { 
    return +one+ +two+ +nums;
}

console.log(calc(10, myNumbers.shift(), myNumbers.shift()));  //80

/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
// 057 - 063
// التكليف 01

console.log("-----------------------------------------------------------------------------------------");
function sayHello(theName, theGender) {
    // Your Code Here
    console.log(`Hello ${theGender === "Male"? `Mr ${theName}` : theGender === "Female"? `Miss ${theName}`: theName}`);
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

/* --------------------------------------------------------------------------------------------- */
// التكليف 02
console.log("-----------------------------------------------------------------------------------------");

function calculate(firstNum, secondNum, operation = 'add') {
    // Your Code Here
    secondNum === undefined ? console.log("Second Number Not Found"): 
    operation === 'subtract'? console.log(firstNum - secondNum):
    operation === 'multiply'? console.log(secondNum * firstNum):
    console.log(firstNum + secondNum);  
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

/* --------------------------------------------------------------------------------------------- */
// التكليف 03
console.log("-----------------------------------------------------------------------------------------");

function ageInTime(theAge) {
  // Your Code Here
    if(theAge <= 10 || theAge >= 100)
        console.log("Age Out Of Range");
    else
    {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


/* --------------------------------------------------------------------------------------------- */
// التكليف 04
console.log("-----------------------------------------------------------------------------------------");

function showDetails(first, second, third) {
    let firstSentence, secondSentence, thirdSentence;

    typeof first === "string"? firstSentence = `Hello ${first},`: 
    typeof second === "string"? firstSentence = `Hello ${second},`:
    firstSentence = `Hello ${third},`;

    typeof first === "number"? secondSentence = `Your Age Is ${first},`: 
    typeof second === "number"? secondSentence = `Your Age Is ${second},`:
    secondSentence = `Your Age Is ${third},`;

    typeof first === "boolean" && first === true || 
    typeof second === "boolean" && second === true ||
    typeof third === "boolean" && third === true? thirdSentence = `You Are Available For Hire,`: 
    thirdSentence = `You Are Not Available For Hire,`
    
    console.log(`${firstSentence} ${secondSentence} ${thirdSentence}`);
}

showDetails('Asmaa', 22, true)  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(22, 'Asmaa', true)  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(true, 22, 'Asmaa')  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(false, 'Asmaa', 22) // Hello Asmaa, Your Age Is 22, You Are Not Available For Hire

/* --------------------------------------------------------------------------------------------- */
// التكليف 05
console.log("-----------------------------------------------------------------------------------------");

function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)

    for(let i = startYear; i <= endYear; i++ ){
        document.write(`<option value="${i}" >${i}</option>`)
    }
    
    document.write(`</select>`)
}
createSelectBox(2000, 2021);
/* --------------------------------------------------------------------------------------------- */
// التكليف 06
console.log("-----------------------------------------------------------------------------------------");

function multiply (...numbers) {
    let result = 1;
    for(let i = 0; i < numbers.length; i++)
    {
        if(typeof numbers[i] === "string") {
            continue;
        }
        else {
            result *= Math.trunc(numbers[i]);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
// 064 - 070
//  التكليف 01
