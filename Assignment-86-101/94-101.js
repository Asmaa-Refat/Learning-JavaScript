//  094 - 101
// التكليف 02
let firstInputField = document.getElementsByClassName("classes-to-add")[0];
let secondInputField = document.getElementsByClassName("classes-to-remove")[0];
let canvas = document.getElementsByClassName("canvas")[0];
let classesToAdd;
let classesToRemove;


firstInputField.addEventListener("input", function(){
    classesToAdd = firstInputField.value;
});

firstInputField.addEventListener("blur", function(){
    if(classesToAdd !== undefined) {
    classesToAdd = classesToAdd.toLowerCase();
    classesToAdd = classesToAdd.split(" ").filter(value =>value !== "");;
    classesToAdd = classesToAdd.sort();
    let len = classesToAdd.length;

    for(let i = 0; i < len; i++) {
        let classSpan = document.createElement("span");
        let classText = document.createTextNode(`${classesToAdd[i]}`);
        
        classSpan.appendChild(classText);
        canvas.appendChild(classSpan);
    }
    firstInputField.value = "";
}
});


secondInputField.addEventListener("input", function(){
    classesToRemove = secondInputField.value;
});

secondInputField.addEventListener("blur", function(){
    if(classesToRemove !== undefined) {

    classesToRemove = classesToRemove.toLowerCase();
    classesToRemove = classesToRemove.split(" ").filter(value =>value !== "");
    let currentClasses = canvas.children;

    let j = 0;
    for(let i = 0; i < currentClasses.length; i++) {
        let content = currentClasses[i].textContent;
        if(content === classesToRemove[j]) {
            currentClasses[i].remove();
            if(currentClasses.length === 0) {
                let classSpan = document.createElement("div");
                let classText = document.createTextNode(`No Classes To Show`);
                classSpan.appendChild(classText);
                canvas.appendChild(classSpan); 
            }
            j++;
        }
    }
    secondInputField.value = "";
    }
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// التكليف 03

let paragraph = document.getElementsByClassName("removed-p")[0];
let div = document.getElementsByClassName("our-element")[0];
paragraph.remove();

let childBefore = document.createElement("div");
let textBefore = document.createTextNode("Start");
childBefore.setAttribute("class", "start");
childBefore.setAttribute("title", "Start Element");
childBefore.setAttribute("data-value", "Start");

childBefore.appendChild(textBefore);
div.before(childBefore);

let childAfter = document.createElement("div");
let textAfter = document.createTextNode("End");
childAfter.setAttribute("class", "end");
childAfter.setAttribute("title", "End Element");
childAfter.setAttribute("data-value", "End");

childAfter.appendChild(textAfter);
div.after(childAfter);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// التكليف 04

let div4 = document.getElementsByClassName("task4")[0];
let elzero = div4.lastChild;
let lastChildText = elzero.textContent.trim();
console.log(lastChildText);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// التكليف 05
console.log("_-------------------------------------_");

function printElementType(element) {
    console.log(element.tagName);
}

window.onclick = function(e) {
    console.log(`This is ${e.target.tagName}`);
};