# Function understanings

---

## 🔹 1️⃣ Function Statement (aka Function Declaration)

👉 **Definition:**
A **Function Statement** declares a named function at the top level or inside another block.

✅ Example:
```javascript
function greet() {
  console.log("Hello");
}
```
✅ Characteristics:

Named function: greet.

Hoisted: Entire function is hoisted (both name and definition) to the top of its scope.

Can be invoked before its definition in code.

✅ Example behavior:
```javascript
greet(); // "Hello"

function greet() {
  console.log("Hello");
}
```

---

## 🔹 2️⃣ Function Expression
👉 Definition:
A Function Expression defines a function as part of an expression (usually assigned to a variable).

✅ Example:
```javascript
const greet = function() {
  console.log("Hello");
};
```

✅ Characteristics:
Can be named or anonymous.

Only the variable declaration is hoisted, not the function assignment.

Cannot be invoked before the line where it is defined.

✅ Example behavior:
```javascript
greet(); // ❌ TypeError: greet is not a function

const greet = function() {
  console.log("Hello");
};
```

---

## 🔹 3️⃣ Named Function Expression
✅ Example:
```javascript
const greet = function myGreet() {
  console.log("Hello");
};
```

The function has an internal name myGreet accessible only inside the function itself.

myGreet is not available in the outer scope:

greet();     // ✅ "Hello"

myGreet();   // ❌ ReferenceError: myGreet is not defined

🔹 4️⃣ Key Differences Summary
| Feature         | Function Statement                            | Function Expression                                |
| --------------- | --------------------------------------------- | -------------------------------------------------- |
| Name required   | Yes                                           | No (can be anonymous or named)                     |
| Hoisted         | ✅ Fully hoisted (can call before declaration) | ❌ Only variable name hoisted, not assignment       |
| When available  | Before and after definition                   | After definition only                              |
| Syntax position | Standalone statement                          | Part of an expression (assignment, argument, etc.) |

---

## 🔹 What is an Anonymous Function?

👉 **Definition:**
> An **anonymous function** is a function **without a name** — it does not have an identifier after the `function` keyword.

Anonymous functions are often used:
- As arguments to other functions (callbacks)
- When a function does not need to be reused
- In places where functions are defined inline

## 🔹 Example 1: Anonymous function expression

```javascript
const greet = function() {
  console.log("Hello");
};

greet(); // "Hello"

✅ Explanation:

This is a function expression assigned to the variable greet.

The function itself has no name (anonymous).

## 🔹 Example 2: Anonymous function as callback
```javascript
setTimeout(function() {
  console.log("Timer done!");
}, 1000);
```
✅ Explanation:

Anonymous function used as a callback for setTimeout.

🔹 Summary :

🔔 Anonymous functions are functions without a name.
They are commonly used as function expressions or callbacks and cannot be invoked by name later unless assigned to a variable.
Modern JavaScript often uses arrow functions as concise anonymous functions.

---

## 🔹 Named vs Anonymous Function Expressions

```javascript
const sayHi = function greet() {
  console.log("Hi");
};

sayHi();   // "Hi"
greet();   // ❌ ReferenceError: greet is not defined (name scoped only inside function)
```

### **Parameters**:
- **Parameters are variables listed in the function definition.**
- They act as **placeholders to accept values when the function is invoked**.

✅ Example:
```javascript
function greet(name) {  // `name` is a parameter
  console.log("Hello " + name);
}
```

2️⃣ Arguments:
Arguments are the actual values passed to the function when it is invoked (called).

✅ Example:
```javascript
greet("Alice");  // "Alice" is an argument
```

🔹 Example illustrating both:
```javascript
function add(x, y) {  // `x` and `y` are parameters
  return x + y;
}

add(5, 3);  // 5 and 3 are arguments
```

---

## 🔹 What does "First-Class" mean?

👉 **Definition:**
> In JavaScript, functions are **first-class citizens**, meaning:
> - Functions are treated like any other value (e.g., numbers, strings, objects).
> - They can be:
>   - Assigned to variables,
>   - Passed as arguments to other functions,
>   - Returned from other functions.

✅ In simple terms:  
**Functions can be used wherever other values (like objects or numbers) can be used.**

---

## 🔹 Example 1: Assigning function to a variable

```javascript
const greet = function() {
  console.log("Hello");
};

greet();  // "Hello"
```

## 🔹 Example 2: Passing function as an argument (callback)
```javascript

function process(callback) {
  callback();
}

process(function() {
  console.log("Processing...");
});
```

## 🔹 Example 3: Returning function from another function
```javascript

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5));  // 10
```

🔹 Key properties of first-class functions:
✅ In JavaScript:

Functions can be:

Stored in variables.

Passed as arguments to other functions.

Returned as values from other functions.

Stored in objects and arrays.

Have properties and methods (since functions are objects too!).

🔹 Summary ():

🔔 First-class functions mean that functions in JavaScript are treated as values:
they can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures.

✅ This capability allows JavaScript to support:

Callback functions

Higher-order functions (functions that operate on other functions)

Functional programming patterns

---