var age = 27;
if ((age) => 18) console.log("you are an adult");

var score = 27;
if (score <= 50) console.log("you failed the test");

var name1 = "John";
if (name1 == "John") console.log("Hello, John");

var day = "Monday";
if (day != "Sunday" && day != "Saturday") console.log("It's a weekday");

var num = 4;
if (num % 2 == 0) console.log("The number is even");

var char = "a";
var pattern = /[a-zA-Z]/g;
var result = char.match(pattern);
if (result != null) console.log("It's a letter");

const list = [1, 2, 3];
var result = Array.isArray(list);
if(result)
console.log("It's an array");

var i = 1;
if(i > 0)
console.log("i is a positive number");

var i = -1;
if(i < 0)
console.log("i is a negative number");

var i=9;
if(i % 3 == 0)
console.log("i is a multiple of 3");

var gpa= 3.5
if(gpa => 3.0 )
console.log("Congratulations, you have a good GPA!");

var password = "mypassword123"
var pattern = /\w{8,}/;
var result = password.match(pattern);
if(result)
console.log("Your password is strong");

var age = 30
if(18 <= age <= 65)
console.log("You are of working age");

var color = "red";
if(color == "red" || color == "green" || color == "blue")
console.log("color is a primary color");

function isNumber(n1){
if(isNaN(n1))
console.log(`${n1} is a not valid number`);
else 
console.log(`${n1} is a valid number`);}

isNumber(11) //"11 is a valid number"
isNumber("19") //"19 is a valid number"
isNumber("xyz") //"xyz is not a number"
isNumber("17.5") //"17.5 is a valid number"
isNumber("21F") //"21F is not a number"





