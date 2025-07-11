# Closures + `setTimeout` in JavaScript

This README explains **how closures work in combination with `setTimeout`**, including common pitfalls and solutions.

---

## 🔹 Example 1: The classic closure + `setTimeout` problem

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```
✅ Expected output (many developers expect):
1
2
3

❌ Actual output:
4
4
4

🔹 Why does this happen?
👉 Explanation:

var is function-scoped, so there is only one i shared across all iterations.

By the time the setTimeout callback runs (after 1s, 2s, 3s), the loop has completed and i is 4.

All three callbacks reference the same i due to closure, hence print 4.

---

## 🔹 Example 2: Solution using let (block scope)
```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```
✅ Output:
1
2
3

✅ Explanation:

let is block-scoped, so a new i is created for each iteration.

Closures capture the correct i for each setTimeout callback.

--

## Example 3: Solution using IIFE (Immediately Invoked Function Expression)

```javascript
for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```
✅ Output:
1
2
3

✅ Explanation:

The IIFE creates a new scope for each iteration.

j captures the value of i correctly for each callback.

---

## 🔹 Example 4: Arrow function + let (modern approach)
```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```
✅ Output:
1
2
3

### 🔹 Summary :

🔔 Closures combined with setTimeout demonstrate how asynchronous callbacks can "remember" the scope in which they were defined.

When using var, the same i is shared across all callbacks ⇒ they all log 4.

Use let for block scoping or an IIFE to capture the correct value of i for each iteration.

Modern JavaScript prefers let or const in for loops for this pattern.
