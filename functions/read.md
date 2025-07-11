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
