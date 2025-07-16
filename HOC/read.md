## 🎯 Higher-Order Functions (HOFs) in JavaScript

### 🔹 What is a HOF?
A **Higher-Order Function (HOF)** is a function that:
- Takes another function as an argument, or
- Returns a function as its result.

---

### 🔹 Example calc area, circumference and diameter of the radii passes as array with thinking of HOC
```js
const radii = [1, 2, 3, 4, 5];

// Direct explicit loops:

// 1️⃣ Area
const areas = [];
for (let r of radii) {
  areas.push(Math.PI * r * r);
}
console.log('Areas:', areas);

// 2️⃣ Circumference
const circumferences = [];
for (let r of radii) {
  circumferences.push(2 * Math.PI * r);
}
console.log('Circumferences:', circumferences);

// 3️⃣ Diameter
const diameters = [];
for (let r of radii) {
  diameters.push(2 * r);
}
console.log('Diameters:', diameters);
```

### 🔹 Same Example thinking in HOC

## 🎯 Higher-Order Function Example: Area, Circumference, Diameter of Circles

We can abstract repeated logic using a higher-order function.

```js
const radii = [1, 2, 3, 4, 5];

// Logic functions
const area = r => Math.PI * r * r;
const circumference = r => 2 * Math.PI * r;
const diameter = r => 2 * r;

// Higher-order function: abstract computation logic
function calculate(arr, logicFn) {
  const result = [];
  for (let r of arr) {
    result.push(logicFn(r));
  }
  return result;
}

// Usage
console.log('Areas:', calculate(radii, area));
console.log('Circumferences:', calculate(radii, circumference));
console.log('Diameters:', calculate(radii, diameter));
```

