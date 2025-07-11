# Block Scope and Shadowing in JavaScript

This README explains two important JavaScript concepts: **Block Scope** and **Variable Shadowing**, with examples.

---

## 🔹 What is Block Scope?

👉 **Block scope refers to the scope created inside a block `{ ... }` where variables declared with `let` and `const` are confined to that block.**

In contrast:
- `var` declarations are **function-scoped**, not block-scoped.
- `let` and `const` are **block-scoped**.

---

### Example 1: `var` vs `let` block scope

```javascript
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10  ✅ `var` is function-scoped or globally scoped
console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // ❌ ReferenceError: c is not defined
```
✅ Explanation:

a is accessible outside because var ignores block scope.

b and c are block-scoped: they exist only inside the { ... }.

---

## 🔹 What is Shadowing?

👉 Shadowing occurs when a variable declared in a local scope (e.g., inside a block or function) has the same name as a variable in an outer scope, effectively "hiding" the outer variable within that local scope.

---

### Example 2: Variable shadowing

```javascript
let x = 100;

{
  let x = 200; // Shadows the outer `x`
  console.log(x); // 200 (inner `x`)
}

console.log(x); // 100 (outer `x`)

```
✅ Explanation:
The inner let x = 200 shadows the outer let x = 100 within the block.

---

### Example 3: Variable shadowing

```javascript
var y = 50;

{
  let y = 60; // ❗ This is legal syntax but problematic
  console.log(y); // 60
}

console.log(y); // 60 (outer `y` also affected!)

```
✅ Explanation:
Even though y was initially declared with let at global scope, var y inside block re-declares it at function/global scope, not block scope, and overrides it.

---

### Example 4: Illegal shadowing

```javascript
let z = 10;

{
  let z = 20; // ✅ Legal shadowing: `let` inside block
}

{
  var z = 30; // ❌ SyntaxError: Identifier 'z' has already been declared
}

```
✅ Explanation:
let z = 10 at outer scope.

let z = 20 in block: ✅ valid shadowing.

var z = 30 in block: ❌ illegal because var declarations hoist to the same scope as outer let.

---

### Example 5: Function scope

```javascript
let a = 10;
function x(){
    var a = 20;
    console.log(a)
}
x()
console.log(a)
```
✅ Explanation:
🔔 When a variable with the same name is declared in an inner function using var, it creates a new local binding that shadows the outer variable.
var declarations are scoped to the function body.
let declarations respect block scope.
After the function finishes, the outer variable remains unaffected.