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


//WORKING WITH ARRAY PART-1
//sort()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
console.log("Banana");console.log("Orange");console.log("Apple");console.log("Mango");

//reverse()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

//pop()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

//push//
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");
console.log(fruits);


// function reverseInPlace() {
//     var words = ["ayilA","biaohS","badahS","anibuR","sifaN"];
    
//     var result = [];
//     for (var i = 0; i < words.length; i++) {
//        result.push( words[i].split('').reverse().join('')) 
//     }
//     return result

//   }
  
//   console.log(reverseInPlace());

//coding challenge on an array

  function reverseInPlace() {
    var words = ["ayilA","biaohS","badahS","anibuR","sifaN"];
    
    var result =[];
    for (var i = 0; i < words.length; i++) {
       result.push(words[i].split('').reverse().join(''))
       
    }
    return result
  }
  console.log(reverseInPlace().reverse())

// const reverseInPlace = () => {
//  const original= ["ayliA", "biaohs", "badahs", "anibuR", "stfall"];
//  let result = []
//   original.reverse().map(name=>{
//      result.push(name.split('').reverse().join(''))
//   })
//     return result;

// };

// console.log(reverseInPlace())


//WORKING WITH ARRAY PART-2

//shift()
var a = ['Nafis', 'Rubina', 'Shadab', 'Shoaib', 'Aliya'];
a.shift();
console.log(a);

//unshift()
var a = ['Rubina', 'Shadab', 'Shoaib', 'Aliya'];
a.unshift('Nafis');
console.log(a);

//concat()
var a = ['Nafis', 'Rubina', 'Shadab'];
var b = ['Shoaib', 'Aliya'];
var c = a.concat(b);
console.log(c);

//join()
var a = ['Nafis', 'Rubina', 'Shadab'];
var b = ['Shoaib', 'Aliya'];
var c = a.join(b);
console.log(c);


//The map method
var numbers = [65, 44, 12, 4];
var newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

//The filter method
var ages = [32, 33, 16, 40];
var result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//The reduce method
var numbers = [175, 50, 25];

var result = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(result)
*/

//The chaining method

const person = [
 { firstName:"Nafisuddin", lastName:"Hashmi", age:61 },
 { firstName:"Rubina", lastName:"Nafis", age:56 },
 { firstName:"Shadab", lastName:"Hashmi", age:27 },
 { firstName:"Shoaib", lastName:"Hashmi", age:25 },
 { firstName:"Aaliya", lastName:"Nafis", age:22 },
];

const output = person.filter((x) => x.age < 30)
.map((x) => x.firstName)


console.log(output);