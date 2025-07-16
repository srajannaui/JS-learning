# 📖 `map`, `filter`, `reduce` in JavaScript — Detailed Explanation with Real-World Examples

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
const users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames); // ['John Doe', 'Jane Smith']
```

### 📦 Real-time use cases of `map()`:

* Converting list of user objects into display names.
* Formatting API response data.
* Mapping product prices to include tax.

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
const products = [
  { name: 'Laptop', inStock: true },
  { name: 'Phone', inStock: false },
  { name: 'Tablet', inStock: true }
];

const availableProducts = products.filter(p => p.inStock);
console.log(availableProducts); // [{ name: 'Laptop', inStock: true }, { name: 'Tablet', inStock: true }]
```

### 📦 Real-time use cases of `filter()`:

* Filtering active users.
* Showing only available items in a store.
* Filtering search results based on criteria.

---

## 3️⃣ `Array.prototype.reduce()`

### ✅ What it does:

* Reduces an array to a **single accumulated value**.

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

### 📦 Real-time use cases of `reduce()`:

#### 1️⃣ Total price in a shopping cart:

```js
const cart = [
  { item: 'Book', price: 10 },
  { item: 'Pen', price: 2 },
  { item: 'Notebook', price: 5 }
];

const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total); // 17
```

#### 2️⃣ Grouping objects by a property:

```js
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] || [];
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log(groupedByAge); // { 25: ['Alice', 'Charlie'], 30: ['Bob'] }
```

#### 3️⃣ Count occurrences of items:

```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

#### 4️⃣ Flatten an array of arrays:

```js
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]
```

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

| Method     | Purpose                  | Returns            | Mutates? | Real-world use                         |
| ---------- | ------------------------ | ------------------ | -------- | -------------------------------------- |
| `map()`    | Transform elements       | New array          | No       | Format data, prepare UI display        |
| `filter()` | Select matching elements | New array (subset) | No       | Filter active items, search filters    |
| `reduce()` | Accumulate array         | Single value       | No       | Totals, grouping, counting, flattening |

---

✅ **Key takeaways:**

* `map`, `filter`, and `reduce` enable clean, declarative, and readable code.
* They do not mutate the original array.
* Real-time use cases include data transformation, filtering UI lists, calculating totals, grouping, counting, and flattening structures.

---

📦 This README provides a complete reference and real-world examples for effectively using `map`, `filter`, and `reduce` in JavaScript.
