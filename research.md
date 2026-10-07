Task 02 — JavaScript Research
1. What are the differences between let, const, and var? When should you use each one?
In JavaScript, let, const, and var are used to declare variables, but they work differently.
- let: We use it when the value of the variable may change later.
- const: We use it when the variable should not be reassigned after it is created.
- var: It is the older way to declare variables. It has different scope behavior, so it is generally better to use let or const in modern JavaScript.

Example:
let age = 20;
age = 21;

const name = "Mohamed";

var city = "Giza";

console.log(age);
console.log(name);
console.log(city);

Console Result:
21
Mohamed
Giza

In my opinion, I would normally use const by default, and use let when I know that the value will change. I would avoid using `var in new code unless there is a specific reason to use it.
Source:
MDN Web Docs — let
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
MDN Web Docs — const
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
MDN Web Docs — var
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

<!-- 2 -->
2. What is the difference between == and ===?
The main difference is how they compare values.
- == compares the values after JavaScript may convert their types.
- === compares both the value and the data type. It does not perform type conversion.
For this reason, === is usually safer and more predictable.
Example:

console.log(5 == "5");
console.log(5 === "5");

Console Result:
true
false

The first result is true because == allows JavaScript to convert the string "5" to a number.
The second result is false because 5 is a number while "5" is a string.
Source:
MDN Web Docs — Equality (==)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
MDN Web Docs — Strict equality (===)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

<!-- 3 -->
3. Why does "10" + 5 return "105", while "10" - 5 returns 5?
The reason is that the + operator can be used for both addition and string concatenation.
When one of the values is a string, the + operator treats the operation as string concatenation.
So:

"10" + 5
becomes:
"10" + "5"
and the result is:
"105"

However, the - operator is only used for mathematical subtraction. JavaScript converts the string "10" into the number 10.

"10" - 5

becomes:
10 - 5

and the result is 5.

Example:
console.log("10" + 5);
console.log("10" - 5);

Console Result:
105
5
Source:
MDN Web Docs — Addition (+)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
MDN Web Docs — Subtraction (-)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction

<!-- 4 -->
4. What is the difference between undefined and null?
undefined and null both represent the absence of a value, but they are used in different situations.
undefined usually means that a variable has been declared but has not been given a value yet.
null is a value that we can assign intentionally when we want to say that there is no value.
Example:

let x;

let y = null;

console.log(x);
console.log(y);

Console Result:
undefined
null

In this example, x is undefined because we declared it without assigning a value.
y is null because we intentionally gave it the value null.
Source:
MDN Web Docs — undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
MDN Web Docs — null
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null

<!-- 5 -->
5. What are truthy and falsy values?
In JavaScript, a value can be treated as either truthy or falsy when it is used in a condition such as an if statement.
A falsy value is a value that JavaScript treats as false.
The main falsy values are:

false
0
-0
0n
""
null
undefined
NaN

Most other values are truthy.
Examples of truthy values include:
"Hello"
42
-10
[]
{}
true

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

console.log(Boolean("Hello"));
console.log(Boolean(10));
console.log(Boolean([]));

Console Result:
false
false
false
true
true
true
For example, the number 0 and an empty string "" are falsy, while "Hello" and 10 are truthy.
Source:
MDN Web Docs — Glossary: Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
MDN Web Docs — Glossary: Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy