var titleName = "Elzero", description = "ELzero web school", date = "25/10";

var htmlSection = `
    <div> 
        <h3>Hello ${titleName}</h3>
        <p>${description}</p>
        <span>${date}</span>
    </div>
`

document.write(htmlSection.repeat(4))
//----------------------------------------------------------------------------------

// التكليف 01
let numberOne = 10;
let numberTwo = 20;
let res = 
console.log('' + numberOne + numberTwo);
console.log(typeof ('' + numberOne + numberTwo));

console.log(`${numberOne}${numberTwo}`);
console.log(typeof(`${numberOne}${numberTwo}`));

console.log(numberTwo + '\n' + numberOne);

console.log(`${numberTwo}
${numberOne}`);

//----------------------------------------------------------------------------------

// التكليف 02
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//----------------------------------------------------------------------------------

// التكليف 03
console.log("`I'm In" + "\n" + "\\\\" + "\n" + "Love \\\\ \"\"\" '''" + 
            "\n" + "+++ With ++" + "\n" + "\\\"\"\"\\\"\"\" " + "\n" + "\"\"JavaScript\"\"\``");

//----------------------------------------------------------------------------------         
// التكليف 04
let a = 21;
let b = 20;
let result = `_${a}`;
result += `_${b}${a}`.repeat(3);
result += `_${b}_`;
console.log(result);   // _21_2021_2021_2021_20_  
