## 🔹 What is a Callback?

👉 **Definition:**

> A **callback function** is a function that is passed as an argument to another function and is executed after some kind of operation (sometimes asynchronous) is completed.

In simpler terms:
- It’s a function **called back at a later time** by the function that receives it.
- **JavaScript heavily relies on callbacks for async programming (e.g., timers, events, network requests).**

---

## 🔹 Real-time Example 1: Asynchronous task with `setTimeout`

```javascript
console.log("Start");

setTimeout(function() {
  console.log("Fetching user data from server...");
}, 2000);

console.log("End");
```

✅ Explanation:

The callback function passed to setTimeout will execute after 2 seconds delay.

This simulates a real-world async task like fetching data from an API.

JavaScript does not block the main thread while waiting.

✅ Output:

Start

End

Fetching user data from server...

---

## 🔹 Real-time Example 2: Callback in event handling

```javascript
document.getElementById("submitBtn").addEventListener("click", function() {
  console.log("Form submitted!");
});
```

✅ Explanation:

The anonymous function is a callback passed to addEventListener.

It will execute when the "click" event happens (real user interaction scenario).

## 🔹 Example 3: Custom callback pattern

```javascript
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello, " + name);
});
```

✅ Explanation:

callback allows you to customize what happens after processUserInput completes its work.

This is common in API design where the library provides hooks for your logic.

## 🔹 Summary:
🔔 A callback in JavaScript is a function passed as an argument to another function and executed later after some operation completes.
Real-time examples:

setTimeout / setInterval async execution

DOM event listeners (addEventListener)

Array methods like forEach, map, filter

# Why Remove Event Listeners in JavaScript?

This section explains **why and when you should remove event listeners (`removeEventListener`) in JavaScript applications**.

---

## 🔹 What is `removeEventListener`?

`removeEventListener` is a DOM API method that **detaches an event listener previously attached with `addEventListener`**, preventing it from being invoked again.

Example:
```javascript
const btn = document.getElementById("myBtn");
const handleClick = () => console.log("Clicked!");

btn.addEventListener("click", handleClick);

// Later in code:
btn.removeEventListener("click", handleClick);
```

🔹 Why remove event listeners? (Benefits)
✅ 1️⃣ Memory management — prevent memory leaks

If event listeners reference large objects or DOM elements, those objects cannot be garbage collected as long as the listener is still attached.

Removing listeners allows garbage collection to clean up memory properly.

✅ 2️⃣ Avoid unintended behavior

If a component or UI element is removed from the page, but its event listeners remain attached, callbacks could fire unexpectedly or on detached elements.

Example: Single Page Applications (SPA) where DOM elements are frequently created/destroyed.

✅ 3️⃣ Improve performance

Unnecessary listeners add overhead (especially if attached globally or on many elements).

Removing listeners you no longer need ensures the browser doesn't waste cycles calling callbacks.

✅ 4️⃣ Manage component lifecycle properly

In frameworks like React (especially before hooks), developers had to manually remove event listeners when unmounting components.

This prevents stale listeners from being triggered after the component no longer exists.

🔹 When should you remove them?

When an element is removed from the DOM

When a listener is no longer relevant (e.g., after a user action or condition is met)

Before re-attaching a listener to avoid duplicates

When cleaning up resources during teardown/unmount
