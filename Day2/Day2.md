# JavaScript Basics

## 1. Variables (ES6)

Declare variables using `var`, `let`, or `const`:

```js
var isStudent = true // ES5
let name = "John"
const age = 25
```

## 2. Console Methods (ES5)

Output messages to the browser console:

```js
console.log("This is a log message")
console.warn("This is a warning message")
console.error("This is an error message")
```

## 3. If-Else Condition (ES5)

Make decisions using conditional statements:

```js
let score = 85

if (score >= 90) {
  console.log("Excellent")
} else if (score >= 60) {
  console.log("Good")
} else {
  console.log("Try again")
}
```

## 4. Document Selectors (DOM API, ES5)

Select HTML elements using JavaScript:

```js
let title = document.getElementById("main-title")
let item = document.querySelector(".item")
```

## 5. Loops (ES5)

Repeat code using `for`, `while` or `do-while`:

```js
for (let i = 0; i < 5; i++) {
  console.log("Number:", i)
}

let count = 0
while (count < 3) {
  console.log("Count:", count)
  count++
}

let count = 0
do {
  console.log("Count:", count)
  count++
} while (count < 3);
```

## 6. Functions

### Function Declaration (ES5)

```js
function greet(name) {
  console.log("Hello", name)
}
```

### Function Expression (ES5)

```js
const greet = function(name) {
  console.log("Hi", name)
}
```

### Anonymous Function (ES5)

```js
setTimeout(function() {
  console.log("This is anonymous")
}, 1000)
```

## 7. Arrow Function (ES6)

Shorter syntax introduced in ES6:

```js
const greet = (name) => {
  console.log("Hey", name)
}
```