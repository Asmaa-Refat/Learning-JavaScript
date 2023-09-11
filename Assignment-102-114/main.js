// 102 - 110
// التكليف 01

// let msg = prompt("Print Number From – To", "Example: 5-20");
// let numbers = msg.split("-");
// let start = +Math.min(numbers[0], numbers[1]);
// let finish = +Math.max(numbers[0], numbers[1]);

// for(let i = start; i <= finish; i++) {
//     document.write(i);
//     document.write("<br>");
// }
// document.write("<hr>");

/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
// التكليف 02

// setTimeout(() => {
//     let container = document.createElement("div");
//     let word = document.createElement("div");
//     let sentence = document.createElement("div");
//     let close = document.createElement("button");

//     let wordText = document.createTextNode("Welcome");
//     let sentenceText = document.createTextNode("Welcome to Elzero Web School");
//     let cross = document.createTextNode("x");

//     close.style.cssText = "border-radius: 14px; border: none; background: red; color: white; float: right; transform: translate(5px, -73px);";
//     container.style.cssText = "width: 356px; height: 94px; background: #f5f3f4; border: 1px solid #e5e5e5; margin: 141px;";
//     word.style.cssText = "font-weight: bold; text-align: center; font-family: sans-serif; padding-top: 25px";
//     sentence.style.cssText = "text-align: center; padding-top: 9px; font-family: sans-serif; font-size: 11px;";

//     close.addEventListener('click', ()=>{
//         container.remove();
//     });

//     word.appendChild(wordText);
//     sentence.appendChild(sentenceText);
//     close.appendChild(cross);

//     container.appendChild(word);
//     container.appendChild(sentence);
//     container.appendChild(close);
//     document.body.appendChild(container);
// }, 5000);

/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
// التكليف 03

// let div3 = document.createElement("div");
// let text3 = document.createTextNode("10");
// div3.appendChild(text3);
// document.body.appendChild(div3);

// let myInterval = setInterval(timer, 1000);
// function timer (){
//     div3.innerHTML -= 1;
//     if(div3.innerHTML === "0")
//         clearInterval(myInterval);
// }

/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
// التكليف 04

// let div4 = document.createElement("div");
// let text4 = document.createTextNode("10");
// div4.appendChild(text4);
// document.body.appendChild(div4);

// let myInterval4 = setInterval(timer4, 1000);
// function timer4 (){
//     div4.innerHTML -= 1;
//     if(div4.innerHTML === "0")
//         location.href = "https://elzero.org/";
// }


/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
// التكليف 05

// let div5 = document.createElement("div");
// let text5 = document.createTextNode("10");
// div5.appendChild(text5);
// document.body.appendChild(div5);

// let myInterval5 = setInterval(timer5, 1000);
// function timer5 (){
//     div5.innerHTML -= 1;
//     if(div5.innerHTML === "5") {
//         window.open("https://elzero.org/", "_blank", "width=200,height=100");
//     }
//     if(div5.innerHTML === "0") {
//         clearInterval(myInterval5);
//     }
// }


/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 

//  111 - 114
// التكليف 01
// let colorSelector = document.getElementById("colorSelector");
// let fontSelector = document.getElementById("fontSelector");
// let sizeSelector = document.getElementById("sizeSelector");

// let storedColor = localStorage.getItem("currentColor");
// let storedFont = localStorage.getItem("currentFont");
// let storedSize = localStorage.getItem("currentSize");

// if(storedColor) {
//     colorSelector.value = storedColor;
//     document.body.style.backgroundColor = colorSelector.value;
// }

// if(storedFont) {
//     fontSelector.value = storedFont;
//     document.body.style.fontFamily = fontSelector.value;
// }

// if(storedSize) {
//     sizeSelector.value = storedSize;
//     document.body.style.fontSize = sizeSelector.value;
// }

// colorSelector.addEventListener("change", () => {
//     document.body.style.backgroundColor = colorSelector.value;
//     localStorage["currentColor"] = colorSelector.value;
// });

// fontSelector.addEventListener("change", ()=>{
//     document.body.style.fontFamily = fontSelector.value;
//     localStorage.setItem("currentFont", fontSelector.value);
// });

// sizeSelector.addEventListener("change", ()=>{
//     document.body.style.fontSize = sizeSelector.value;
//     localStorage.currentSize = sizeSelector.value;
// });


/* ------------------------------------------------------------------------------------------------------- */ 
/* ------------------------------------------------------------------------------------------------------- */ 
// التكليف 02

// let nameField = document.getElementById("name");
// let ageField = document.getElementById("age");
// let selectFruit = document.getElementById("fruits");

// nameField.value = sessionStorage["userName"] || " ";
// ageField.value = sessionStorage["userAge"] || " ";
// let selectedFruit = sessionStorage.getItem("selectedFruit");

// if(selectedFruit) {
//     selectFruit.value = selectedFruit;
// }

// nameField.addEventListener("input", ()=>{
//     sessionStorage['userName'] = nameField.value;
// });

// ageField.addEventListener("input", ()=>{
//     sessionStorage['userAge']= ageField.value ;    
// });

// selectFruit.addEventListener("change", ()=>{
//     sessionStorage["selectedFruit"] = selectFruit.value;
// });
