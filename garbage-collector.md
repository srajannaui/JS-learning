# Garbage Collection (GC) in JavaScript

This README explains **Garbage Collection in JavaScript**, how it works, and what developers should know about it.

---

## 🔹 What is Garbage Collection?

👉 **Definition:**

> **Garbage Collection is an automatic process performed by JavaScript engines (like V8 in Chrome, SpiderMonkey in Firefox) to free up memory occupied by objects that are no longer reachable or needed by the application.**

✅ The key idea:
- JavaScript is a **garbage-collected language**, so developers don’t explicitly allocate/deallocate memory.
- The **engine tracks objects and automatically cleans up memory when an object is no longer reachable**.

---

## 🔹 How does it work?

✅ JavaScript engines typically implement **mark-and-sweep garbage collection**:

1️⃣ **Mark phase:**
- The engine starts from "root" objects (e.g., global object, active functions’ scopes) and **marks all reachable objects**.

2️⃣ **Sweep phase:**
- Any objects **not marked as reachable are considered "garbage" and are removed from memory**.

---

## 🔹 Example:

```javascript
let user = { name: "Alice" }; // `user` refers to an object ⇒ reachable

user = null; // Now no references to the `{ name: "Alice" }` object ⇒ eligible for GC
```

✅ Explanation:

Initially, the object { name: "Alice" } is referenced by user.

After setting user = null, the object becomes unreachable ⇒ eligible for garbage collection.

🔹 Common roots for reachability:
Global variables

Variables in active functions (local variables)

Variables in closures

DOM elements referenced by JS
