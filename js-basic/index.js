// ex 1 
//Cash flow ratio
var cash = 1000
var liabilities= 500

console.log(cash/liabilities);

//Net income
var revenues= 1000
var expenses= 500

console.log(revenues - expenses);

//Total assets
var liabilities= 1000
var equity= 500
console.log(liabilities + equity);

//Net income 
var profit= 1000
var sales= 500
console.log(profit * sales);

//Average
console.log((7+9+2)/3);

//Discount 
console.log(150 - (150 * 30/100));

//Age limit (older than 18 and less than 30)
var age = 20
if(18 <= age <= 30) 
console.log("true");

//Exponential
console.log(2**3);

//Remainder
console.log(10 % 4);

console.log("\nex2 **********************************************\n");

//ex 2
console.log(typeof(100));  
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof (Infinity));
console.log(1 == '1');
console.log(1 === '1');

console.log("\nex3 **********************************************\n");

//ex3 
var str = "Welcome to Orange"

console.log(str.toUpperCase());
console.log(str.toUpperCase(str.substring(8, 10)));//start index ,  end index (not included)
console.log(str.replace("Welcome to","Hello from"));
console.log(str.toLowerCase());
console.log(str.length);
console.log("Welcome to \"Orange\"");
console.log("Welcome to Orange" + "Jordan");

console.log("\nex4 **********************************************\n");
var stri = "cactus" 
var FirstChar = stri.at(0)//
var WithoutFirstChar = stri.slice(1 , stri.length + 1)
console.log(FirstChar + WithoutFirstChar.replace(FirstChar, "*"));
