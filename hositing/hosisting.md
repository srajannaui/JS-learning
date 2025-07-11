# Hoisting in JavaScript

This README explains **Hoisting**, a core JavaScript concept frequently asked in interviews.

---

## 🔹 What is Hoisting?

👉 **Definition:**

> **Hoisting is JavaScript’s default behavior of moving declarations to the top of their containing scope during the compilation phase, before code execution starts.**

In simple terms:
- Variable and function declarations appear to "move to the top" of their scope.
- **`var` declarations and function declarations are hoisted.**
- **`let` and `const` are hoisted too but behave differently because of the Temporal Dead Zone (TDZ).**

---

## 🔹 Key Points:

- **Only declarations are hoisted — initializations are not.**
- **Function declarations are hoisted completely (declaration + definition).**
- **Function expressions are treated like variables (the variable name is hoisted but not its assignment).**
- **`let` and `const` are hoisted but stay in TDZ and cannot be accessed before declaration.**

---

## 🔹 Example 1: `var` Hoisting

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
