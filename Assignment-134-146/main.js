// 134 - 146
// التكليف 01

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let RegExpPattern1 = /^\d{4}:[a-z]{2}\d:(\d{4}:){5}\d{4}$/ig;

console.log(RegExpPattern1.test(ip));
console.log("----------------------");

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

// التكليف 02
let specialNames2 = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let RegExpPattern2 = /Os\d*O/g;
console.log(specialNames2.match(RegExpPattern2));

// Output
// ['Os10O', 'OsO', 'Os100O']
console.log("--------------------");

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

// التكليف 03
let phone3 = "+(995)-123 (4567)";
let RegExpPattern3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(RegExpPattern3.test(phone3));
console.log("--------------------");

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

// التكليف 04
let re4 = /https?: \/\/ (?:[-\w]+\.)? ([-\w]+)\.\w+ (?:\.\w+)?\/?.*/i;
// it starts with 'http' or 'https' the 's' is optional, followed by ':'      ---> http s? :
// followed by // and {'(' optional then ':' then '-' or word character repeated one or more times then '.' } all in between the curly braces are aptional ---> \/\/ (? : [-\w]+ \.)?
// then - or word character repeated one or more times then '.' the word character repeated one or more times ---> ([-\w]+)\.\w+
// then {'(' optional then ':' then '.' then word character repeated one or more times } all in between the curly braces are aptional then '/' optional then
// Matches any character except linebreaks---> (?:\.\w+)?\/?.*


/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

// التكليف 05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re5 = /\d{2}[\s \/]-?\s?10[\/ \s]-?\s?(19)?82/; // Write Pattern Here

console.log(date1.match(re5)); // "25/10/1982"
console.log(date2.match(re5)); // "25 - 10 - 1982"
console.log(date3.match(re5)); // "25 10 1982"
console.log(date4.match(re5)); // "25 10 82"

console.log("--------------------");

/* --------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------- */

// التكليف 06

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re6 = /(https?:\/\/(www.)?)?\w{6}.\w{3}(:\d{4}\/\w{8}.\w{3}\?id=\d{3}&cat=\w{6})?/; // Write Your Pattern Here

console.log(url1.match(re6));
console.log(url2.match(re6));
console.log(url3.match(re6));
console.log(url4.match(re6));
console.log(url5.match(re6));
