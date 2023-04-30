var text = "";
for (let i = 1; i < 11; i++) {
  text += i + " ";
}
console.log(text);

var i = 1;
var text = "";
while (i < 11) {
  text += i + " ";
  i++;
}
console.log(text);

var text = "";
const num = [1, 2, 3, 4, 5]; // num.length = 5
for (let i = 0; i < num.length; ++i) {
  text += num[i] + " ";
}

var text = "";
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) text += i + " ";
}
console.log(text);

var sum = 0;
for (let i = 1; i < 11; i++) {
  sum += i;
}
console.log(sum);

var max = 0;
// const num = [ 1 , 2 , 3 , 4 , 5]; num.length = 5
for (let i = 0; i < num.length; ++i) {
  max = Math.max(max, num[i]);
}
console.log(max);

var min = 0;
// const num = [ 1 , 2 , 3 , 4 , 5]; num.length = 5
for (let i = 0; i < num.length; ++i) {
  min = Math.min(min, num[i]);
}
console.log(min);

var avg;
var sum = 0;
// const num = [ 1 , 2 , 3 , 4 , 5];  num.length = 5
for (let i = 0; i < num.length; ++i) {
  sum += num[i];
}
avg = sum / num.length;
console.log(avg);

//factorial of a number
var number = 5;
var factorial = 1;
for (var i = number; i > 0; i--) {
  factorial *= i;
}
console.log(factorial);

var input = 10;
const Fibonacci = [0, 1];
var output = "";
for (let i = 0, j = 1; Fibonacci[i] + Fibonacci[j] < input; ++i, ++j) {
  Fibonacci.push(Fibonacci[i] + Fibonacci[j]);
}

for (let i = 0; i < Fibonacci.length; ++i) {
  output += Fibonacci[i] + " ";
}
console.log(output);

var number = 20;
var prime = "2 ";
for (let x = 3; x <= number; ++x) {
  for (var i = 2; i < x; ++i) {
    if (x % i == 0)
      //not a prime number
      // and exit from the loop.
      break;
  }
  if (i == x) prime += x + " ";
}
console.log(prime);

var number = 5;
var table = "";
for (var i = 1; i <= 10; i++) {
  if (i == 10) table += `${number} x ${i} = ` + i * number;
  else table += `${number} x ${i} = ` + i * number + ", ";
}
console.log(table);

var text = "";
const twod = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (var i = 0; i < twod.length; ++i)
  for (var j = 0; j < twod[i].length; ++j) {
    text += twod[i][j] + " ";
  }
console.log(text);

var text = "";
//const num = [ 1 , 2 , 3 , 4 , 5];
for (let i = num.length - 1; i >= 0; --i) {
  text += num[i] + " ";
}
console.log(text);

var start = 2;
var end = 4;
var text = "";

var SelectedRange = num.slice(start, end + 1);
for (var i = 0; i < SelectedRange.length; ++i) {
  text += SelectedRange[i] + " ";
}
console.log(text);

var text = "";
var step = 2;
//const num = [1, 2, 3, 4, 5]; // num.length = 5
for (let i = 0; i < num.length; i += step) {
  text += num[i] + " ";
}
console.log(text);

var check = 4;
var text = "false";
for (let i = 0; i < num.length; ++i) {
  if (check == num[i]) {
    text = true;
    break;
  }
}
console.log(text);

const array = [1, 2, 1, 3, 2, 1];
var number = 1;
var frequency = 0;
for (let i = 0; i < array.length; ++i) {
  if (number == array[i]) {
    frequency += 1;
  }
}
console.log(frequency);
