//  147 - 158
// التكليف 01

// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

//class syntax
class Car {
    constructor (name ,model ,price){
        this.n = name;
        this.m = model ;
        this.p = price;
    }
    run() {
        return "Car Is Running Now";
    }

    stop() {
        return "Car Is Stopped";
    }
}

let car1 = new Car("MG", "2022", 420000);
let car2 = new Car("isuzu", "2014", 30000);
let car3 = new Car("jelly", "2020", 12300);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());
// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

console.log("-------------------------------------------");
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
// التكليف 02

class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

// Write Tablet Class Here
class Tablet extends Phone{
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.sz = size || "Unknown";
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.sz}`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown


console.log("-----------------------------------------------------");
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
// التكليف 03

// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;

        if(!card.toString().includes('-')) {
            this.#c = card.toString().replace(/(\d{4})/g, '$1-').slice(0, -1); // it searches for groups of four digits in the numberStr and replaces them with the same group ($1) followed by a hyphen. This effectively inserts hyphens after every group of four digits in the string.
        } 
        else {
            this.#c = card.toString();
        }
    }
    getCard() {
        return this.#c;
    }

    showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}` ;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined



console.log("-----------------------------------------------------");
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
// التكليف 04

// Write Your Code Here
String.prototype.addLove = function (){
    return `I Love ${myStr} Web School`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("-----------------------------------------------------");
/* ------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------- */
// التكليف 05

const myObj5 = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj5, "score", {writable: false});
Object.defineProperty(myObj5, "id", {enumerable: false});
delete myObj5.country;

myObj5.score = 500;

for (let prop in myObj5) {
    console.log(`${prop} => ${myObj5[prop]}`);
}

console.log(myObj5);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}