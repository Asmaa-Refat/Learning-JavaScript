//  086 - 093
// التكليف 01
let ele1 = document.getElementById("elzero");
let ele2 = document.getElementsByTagName("div");
let ele3 = document.getElementsByClassName("element");
let ele4 = document.getElementsByName("js")

let ele5 = document.querySelector(".element")
let ele6 = document.querySelector("div");  //gets me the first element only
let ele7 = document.querySelector('[name="js"]');
let ele8 = document.querySelector("#elzero") 

let ele9 = document.querySelectorAll(".element");
let ele10 = document.querySelectorAll("div");
let ele11 = document.querySelectorAll('[name="js"]');

console.log(ele1);
console.log(ele2[0]);
console.log(ele3[0]);
console.log(ele4[0]);
console.log(ele5);

console.log(ele6);
console.log(ele7);
console.log(ele8);
console.log(ele9[0]);
console.log(ele10[0]);

console.log(ele11[0]);

/* ----------------------------------------------------------------------------------------------------- */
// التكليف 02

for(let i = 0; i < 10; i++) {
    let myDiv2 = document.createElement("div");
    let myImg = document.createElement("img");

    myImg.setAttribute("decoding", "async");
    myImg.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    myImg.setAttribute("alt", "Elzero Logo");
    myImg.setAttribute("style", "background: red");

    myDiv2.appendChild(myImg);
    document.body.appendChild(myDiv2);
}

/* ----------------------------------------------------------------------------------------------------- */
// التكليف 03

let currencyDiv = document.getElementsByClassName("result")[0];
let dollarInput = document.forms[0].dollar;
let flag = true;

dollarInput.addEventListener('click', function (){
    if(flag) {
        currencyDiv.textContent = `Please Enter an Amount`;
        flag = false;
    }
})

dollarInput.addEventListener('input', function () { 
    let usdAmount = parseFloat(dollarInput.value);

     // Check if the input is a valid number
    if (!isNaN(usdAmount)) {
        let exchangeRate = 15.6;
        let egyptianPounds = usdAmount * exchangeRate;

        currencyDiv.textContent = `${usdAmount} USD Dollar = ${egyptianPounds.toFixed(2)} Egyptian Pound`;
    }
    else if(dollarInput.value === '') {
        currencyDiv.textContent = `Please Enter an Amount`;
    }
    else {
        currencyDiv.textContent = `please Enter a Valid Number`;
    }
})

/* ----------------------------------------------------------------------------------------------------- */
// التكليف 04
let firstDiv4 = document.getElementsByClassName("one")[0];
let firstTitle = firstDiv4.getAttribute("title");
let firstText = firstDiv4.innerHTML;

let secondtDiv4 = document.getElementsByClassName("two")[0];
let secondTitle = secondtDiv4.getAttribute("title");
let secondText = secondtDiv4.innerHTML;


firstDiv4.setAttribute("title", secondTitle);
firstDiv4.innerHTML = secondText;

secondtDiv4.setAttribute("title", firstTitle);
secondtDiv4.innerHTML = `${firstText} 2`;

/* ----------------------------------------------------------------------------------------------------- */
// التكليف 05

let images = document.getElementsByClassName("task4");
let len = images.length;

for(let i = 0; i < len; i++) {
    
    if(images[i].getAttribute("alt") === null) {
        images[i].setAttribute("alt", "ELzero New");
    }
    else {
        images[i].setAttribute("alt", "Old")
    }
}

/* ----------------------------------------------------------------------------------------------------- */
// التكليف 06

let secondForm = document.forms[1];
let children = secondForm.children;

let firstInput6 = secondForm.firstElementChild;
let secondInput6 = children[1];

let selectOptions = children[2];
let createButton = children[3];
let results = children[4];


let numOfElements;
firstInput6.addEventListener('input', function () {
    numOfElements = parseInt(firstInput6.value)
});

let repeatedText;
secondInput6.addEventListener('input', function () {
    repeatedText = secondInput6.value;
});

secondForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
});

createButton.addEventListener('click', function() {
    if(results.children.length > 0) {
        while (results.firstElementChild) {
            results.removeChild(results.firstElementChild);
        }
    }

    for(let i = 0; i < numOfElements; i++) {
        let element = document.createElement(`${selectOptions.value}`);
        element.innerHTML = repeatedText;
        element.className = "box";
        element.setAttribute("title", "Element");
        element.setAttribute("id", `id-${i+1}`);
        results.appendChild(element);
    }
});

/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */
// 094 - 101