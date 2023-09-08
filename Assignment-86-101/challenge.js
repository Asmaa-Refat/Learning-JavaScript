
// Creating the Header Elements
let headerDiv = document.createElement("div");
let links = document.createElement("div");
let elzeroWord = document.createElement("div");

let link1 = document.createElement("a");
let link2 = document.createElement("a");
let link3 = document.createElement("a");
let link4 = document.createElement("a");

let text1 = document.createTextNode("Home");
let text2 = document.createTextNode("About");
let text3 = document.createTextNode("Service");
let text4 = document.createTextNode("Contact");
elzeroWord.textContent = "Elzero";

//styling header + body
document.body.style.cssText = "background: #ececec; margin: 0; font-family: Arial, Helvetica, sans-serif;";
headerDiv.style.cssText = "background: white; overflow: hidden;";
links.style.cssText = " float: right; color: #7e7c7e; padding: 14px 16px; font-size: 17px;";
link1.style.cssText = "padding-right: 20px";
link2.style.cssText = "padding-right: 20px";
link3.style.cssText = "padding-right: 20px";
elzeroWord.style.cssText = "color: #24a86d; padding-left: 16px; transform: translateY(12px); width: 63px; height: 50px; font-size: 25px; font-weight: bold";

// Append text to link
link1.appendChild(text1);
link2.appendChild(text2);
link3.appendChild(text3);
link4.appendChild(text4);

// Append each link to the links div
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);
links.appendChild(link4);

headerDiv.appendChild(links);
headerDiv.appendChild(elzeroWord);

document.body.appendChild(headerDiv);
// ////////////////////////////////////////////////    END OF HEADER    ////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let gridContainer = document.createElement("div");
gridContainer.style.cssText = "display: flex; justify-content: space-around; flex-wrap: wrap";

for(let i = 1; i <= 15; i++) {
    let productText = document.createTextNode("Product");

    let rectangle = document.createElement("div");
    let numberText = document.createTextNode(`${i}`);
    let number = document.createElement("div");
    let product = document.createElement("div");

    rectangle.style.cssText = "background: white; width: 400px; margin-top: 40px";
    product.style.cssText = "color: #7e7c7e; font-size: 11px; text-align: center; transform: translateY(-18px);";
    number.style.cssText = "font-size: 30px; text-align: center; padding: 20px;";

    number.appendChild(numberText);
    product.appendChild(productText);
    rectangle.appendChild(number);
    rectangle.appendChild(product);
    gridContainer.appendChild(rectangle);
    document.body.appendChild(gridContainer);
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating the Footer

let footerText = document.createTextNode("Copyright 2021");
let footer = document.createElement("footer");

footer.style.cssText = "background: #24a86d; color: white; text-align: center; padding: 15px; float: bottom; width: 100%; position: fixed;  bottom: 0;";

// Append text to footer 
footer.appendChild(footerText);

// Append headerDiv to the body
document.body.appendChild(footer);


