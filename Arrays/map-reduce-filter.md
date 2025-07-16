# 📖 `map`, `filter`, `reduce` in JavaScript — Detailed Explanation

## 🔔 Introduction

`map`, `filter`, and `reduce` are powerful array methods central to **functional programming** in JavaScript. These methods allow concise, expressive, and declarative transformations and computations on arrays.

---

## 1️⃣ `Array.prototype.map()`

### ✅ What it does:

* Creates a **new array** by applying a function to every element.
* Does **not mutate the original array**.

### 🔧 Syntax:

```js
array.map(callback(currentValue, index, array), thisArg)
```

### 🔔 Example:

```js
const numbers = [1, 2, 3, 4];
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9, 16]
```

### 📦 Use case:

* Useful for **transforming data** (e.g., convert numbers, format strings).

---

## 2️⃣ `Array.prototype.filter()`

### ✅ What it does:

* Returns a **new array containing elements that pass a test condition**.
* Does **not mutate the original array**.

### 🔧 Syntax:

```js
array.filter(callback(currentValue, index, array), thisArg)
```

### 🔔 Example:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### 📦 Use case:

* Useful for **extracting a subset of elements that match a condition**.

---

## 3️⃣ `Array.prototype.reduce()`

### ✅ What it does:

* Reduces an array to a **single accumulated value**.
* Can be used for sums, averages, building objects, etc.

### 🔧 Syntax:

```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

### 🔔 Example:

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

### 📦 Use case:

* Ideal for **aggregating array data**.

---

## 🔥 Example chaining all three:

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .map(x => x * 2)        // [2, 4, 6, 8, 10, 12]
  .filter(x => x > 5)     // [6, 8, 10, 12]
  .reduce((acc, val) => acc + val, 0); // 36

console.log(result); // 36
```

---

## 📝 Summary Table

| Method     | Purpose                  | Returns                 | Mutates? | Common Use                  |
| ---------- | ------------------------ | ----------------------- | -------- | --------------------------- |
| `map()`    | Transform elements       | New array (same length) | No       | Format or convert values    |
| `filter()` | Select matching elements | New array (subset)      | No       | Filter items by condition   |
| `reduce()` | Accumulate array         | Single value (any type) | No       | Sum, product, build objects |

---

✅ **Key takeaways:**

* `map`, `filter`, and `reduce` promote a **declarative style**.
* They enable **clean, readable, and functional code**.
* All return **new values** and avoid mutating the original array.

---

📦 This README provides a standalone detailed explanation and example for `map`, `filter`, and `reduce` for easy reference in functional JavaScript programming.
