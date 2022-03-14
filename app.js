/*
console.log("alia")

let firstName = "aaliya"
console.log (firstName)

let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

console.log (myFirstJob)

//completed the assignment of values and variables

let contry = "india";
let continent = "asia";
let population = 1300000000;

console.log (contry);
console.log (continent);
console.log (population);


//Destructrutring Arrays

let user = ["Aaliya", 22, "Deoghar"]
let [name , age , city] = user;

console.log (name);
console.log (age);
console.log (city);

//Destructrutring object

let person = {
    name : "Aaliya",
    age : 22,
}

let {name , age} = person;

console.log (name);


//spread operator
 
var arr = [1,2,3]
var arr1 = [...arr,4,5,6]

console.log(arr1)



//rest operator

function sum (b, ...a) {
    console.log(b,a)
}

sum (5,6,7)


let obj = {
    name: "Aaliya",
    language: "JavaScript",
    hobbies: "photography"
}

//Iterating an object using for-in loop:

for (let key in obj){
    console.log(obj[key]);
}

//Iterating an array using For-of loop:
console.log("***********For of loop starts here***********")

fruits = ["apple","banana","grapes"];

for(let name of fruits){
    console.log(name)

}


//ES6 Enhanced object literals

   const keyname= "name";
const product={
    [keyname]:"laptop",
    price:100,
};

console.log(product);

const accessToken = "kugyhidgtuhewoig";
const refreshToken = "dioiujhsiukjhfu";

const person={
    accessToken,
    refreshToken,
}

console.log(person);


//WORKING WITH STRING PART-1:
var str = "Javascript is a Great is Language";

//length
var a = str.length; 
console.log(a);

//toLowerCase() & toUpperCase()
var a = str.toLowerCase();
console.log(a);

var a = str.toUpperCase();
console.log(a);

//includes()
var a = str.includes("Great");
console.log(a);

//startsWith() & endsWith()
var a = str.startsWith("Java");
console.log(a);

var a = str.endsWith("age");
console.log(a);

//search()
var a = str.search("is");
console.log(a);

//match()
var a = str.match(/is/g);
console.log(a);


//WORKING WITH STRING PART-2:
var str = "  Javascript is a Great is Language";

//indexOf() & lastIndexOf()
var a = str.indexOf("is");
console.log(a);

var a = str.lastIndexOf("is");
console.log(a);

//replace()
var a = str.replace("Javascript", "PHP");
console.log(a);

//trim()
var a = str.trim();
console.log(a);

//charAt
var a = str.charAt(11);
console.log(a);

//charCodeAt()
var a = str.charCodeAt(11);
console.log(a); 

//fromCharCode()
var a = String.fromCharCode(65); 
console.log(a);
*/

//WORKING WITH STRING PART-3

var str = "Javascript is a Great is Language";
var str2 = "hello";

//concat()
var a = str.concat(str2);
console.log(a);

//split()
var a = str.split(" ");
console.log(a);

//repeat()
var a = str.repeat(3);
console.log(a);

//slice()
var a = str.slice(3);
console.log(a);

//substr() & substring()
var a = str.substr(3,5);
console.log(a);

var a = str.substring(3,5);
console.log(a);


