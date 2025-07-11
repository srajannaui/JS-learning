# Closures in JavaScript

This README explains **Closures in JavaScript**, a fundamental and commonly asked interview question.

---

## 🔹 What is a Closure?

👉 **Definition:**
> A **closure is the combination of a function and its lexical environment (scope) in which it was declared.**

In simple terms:
- A closure allows a **function to "remember" variables from the scope where it was defined**, even if it’s executed outside that scope.
- Function bundled together with its lexical scope 

---

## 🔹 How does it work?

✅ Closures are created every time a function is declared because **functions in JavaScript "remember" the scope in which they were created**.

---

## 🔹 Example 1: Basic closure

```javascript
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const fn = outer();  // `outer` is called, returns `inner`
fn();  // 1
fn();  // 2
fn();  // 3

```
✅ Explanation:

When outer() is called:

A new execution context for outer is created.

counter is initialized to 0.

inner is returned and assigned to fn.

Even though outer() has finished executing:

The inner function retains access to counter through closure.

This allows fn() to increment and log counter on subsequent calls.

---

## 🔹 Example 2: Function factory using closure

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(2));  // 7
console.log(add5(10)); // 15
```
✅ Explanation:
makeAdder returns a function that adds x to y.
The inner function "closes over" x.
Even after makeAdder(5) finishes, the returned function remembers x = 5.

---

## 🔹 Example 3: Closure with private state (encapsulation)

```javascript
function counter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    }
  };
}

const c = counter();
c.increment();  // 1
c.increment();  // 2
c.decrement();  // 1
```
✅ Explanation:

count is private to the counter function.

The returned object’s methods (increment, decrement) form closures over count and can manipulate it.

No direct access to count from outside ⇒ achieves data encapsulation.
```javascript
function Counter() {
  this.count = 0;

  this.increment = function() {
    this.count++;
    console.log(this.count);
  };

  this.decrement = function() {
    this.count--;
    console.log(this.count);
  };
}

// Usage:
const c = new Counter();
c.increment();  // 1
c.increment();  // 2
c.decrement();  // 1
```
✅ Explanation:

this.count belongs to the instance created by new Counter().

increment and decrement access this.count.

## 🔹 Why are closures useful?
✅ Common use-cases:

Data encapsulation and privacy

Function factories (creating specialized functions)

Maintaining state in asynchronous code (e.g., callbacks, event handlers)

Memoization / caching

## 🔹 Summary

🔔 Closures allow a function to access variables from its outer lexical scope even after that outer function has returned.

Closures are created every time a function is created.

Useful for maintaining private variables and state.

Enable powerful patterns like function factories, currying, and encapsulation.