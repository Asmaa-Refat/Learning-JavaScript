//التكليف 02

document.write("<h1> Elzero </h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.fontFamily = "Arial";

// --------------------------------------------------------------

// التكليف 03
console.log("%cElzero %cWeb %cSchool" , "color: red; font-size:40px;" , "color: green; font-size:40px; font-weight: bold;", "color: white; font-size:40px; background-color:blue;");

// --------------------------------------------------------------

// التكليف 04

console.group("Group 1");
    console.log("Message One");
    console.log("Message Two");
    console.group("Child Group");
        console.log("Child One");
        console.log("Child Two");
        console.group("Grand Child Group");
            console.log("Grand Child One");
            console.log("Grand Child Two");
        console.groupEnd()
    console.groupEnd()
console.groupEnd()

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd()

// --------------------------------------------------------------
// التكليف 05

console.table(["Asmaa", "Mohamed", "Mama", "Ahmed"]);
// --------------------------------------------------------------

// التكليف 06
//   مطلوب منك إلغاء تنفيذ ال كود بواسطة ما تعلمته بطريقتين


//console.log("Iam In Console");
//document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
