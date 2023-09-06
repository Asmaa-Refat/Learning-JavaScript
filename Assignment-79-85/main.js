// 079 - 085
// التكليف 01

// Create Your Object Here
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function() {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    },
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

/* --------------------------------------------------------------------------- */
// التكليف 02

console.log("-------------------------------------------------");
// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = Object.create({property: "Method Two"});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = new Object;
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, {property: "Method Four"});
console.log(objMethodFour.property); // "Method Four"

/* --------------------------------------------------------------------------- */
// التكليف 03

console.log("-------------------------------------------------");

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
let finalObject3 = Object.assign({a}, threeNums, twoNums);
console.log(finalObject3);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/

/* --------------------------------------------------------------------------- */
// التكليف 04

console.log("-------------------------------------------------");

// The Object To Work With
let myFavGames4 = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

  // Code One => How To Get Object Length ?
let objectLength3 = Object.keys(myFavGames4).length;
let objKeys = Object.keys(myFavGames4);

for (let i = 0; i < objectLength3; i++) {
    console.log(`The Game Name Is ${objKeys[i]}`);
    console.log(`The Publisher Is ${myFavGames4[objKeys[i]].publisher}`);
    console.log(`The Price Is ${myFavGames4[objKeys[i]].price}`);

    // Check If Nested Object Has Property (bestThree) 
    if (myFavGames4[objKeys[i]].bestThree) {
        console.log("- Game Has Releases");
        console.log(`First => ${myFavGames4[objKeys[i]].bestThree["one"]}`);
        console.log(`Second => ${myFavGames4[objKeys[i]].bestThree["two"]}`);
        console.log(`Third => ${myFavGames4[objKeys[i]].bestThree["three"]}`);
    }
    console.log("#".repeat(20));
}

// Ouput
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"