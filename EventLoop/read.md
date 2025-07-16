# JavaScript Execution in the Browser

This README explains the flow of how JavaScript executes in a browser environment, referencing the accompanying diagram (compressed_diagram.png).

## 🔹 Overview of the diagram

The diagram illustrates the key components involved when a user types a URL and the browser begins executing JavaScript:

1️⃣ URL Entry

The user types a URL (e.g., https://example.com) and presses Enter.

The browser fetches the HTML document from the server.

2️⃣ Call Stack (JS Engine)

The Call Stack is part of the JavaScript engine (e.g., V8 in Chrome).

It executes JavaScript code synchronously — line by line.

Function invocations are pushed and popped from this stack.

3️⃣ Web APIs (Provided by Browser, not JS Engine)

Functions like setTimeout, fetch, localStorage, DOM APIs, etc., are exposed by the browser via the window object.

When JS code invokes these APIs, the actual work happens outside the JS engine (e.g., timers, network requests).

4️⃣ Callback Queue (Task Queue)

Once async operations complete (e.g., setTimeout finishes, fetch resolves), their callbacks are placed in the Callback Queue.

This queue holds pending callbacks waiting to be executed.

5️⃣ Event Loop

The Event Loop constantly checks if the Call Stack is empty.

If empty, it pushes the first callback from the Callback Queue onto the Call Stack for execution.

6️⃣ Local Storage

A key-value storage mechanism provided by the browser for persisting data.

localStorage can be accessed via JavaScript and is part of Web APIs.

🔹 Summary of Flow

1️⃣ User types URL and requests page.

2️⃣ Browser parses HTML and encounters JavaScript:

JS executes synchronously in the Call Stack.

Async tasks are delegated to Web APIs.

3️⃣ When async tasks complete:

Their callbacks are pushed to the Callback Queue.

Event Loop moves callbacks into Call Stack when ready.

4️⃣ Rendering updates, console logs, DOM manipulations, storage access, etc., occur during this process.

## 🔹 What is the Microtask Queue?

The Microtask Queue (also called Job Queue) holds tasks that should be executed immediately after the current script execution and before any Macrotasks (e.g., setTimeout).

In JavaScript, Microtasks have higher priority than Macrotasks.Once the current synchronous code completes, the Event Loop drains the entire Microtask Queue before moving to the next Macrotask.

🔹 What goes into the Microtask Queue?

✅ Common sources of Microtasks:

Promise.then(), Promise.catch(), Promise.finally() callbacks

queueMicrotask() callbacks

MutationObserver callbacks

❌ Examples of what does NOT go into the Microtask Queue:

setTimeout and setInterval (Macrotasks)

requestAnimationFrame (Macrotask)

UI events (Macrotasks)

🔹 Example: Microtask vs Macrotask order

```javascript

console.log('Script start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise.then callback');
});

queueMicrotask(() => {
  console.log('Microtask: queueMicrotask callback');
});

console.log('Script end');
```

🔔 Expected Output:

Script start
Script end
Microtask: Promise.then callback
Microtask: queueMicrotask callback
Macrotask: setTimeout callback

✅ Explanation:

Promise.then and queueMicrotask callbacks run before setTimeout callback because the Microtask Queue is drained entirely before processing the next Macrotask.

🔹 Summary (Interview-friendly answer):

🔔 The Microtask Queue is a queue where high-priority asynchronous callbacks (like Promise handlers) are stored and executed immediately after the current synchronous code and before any Macrotasks (like setTimeout).

✅ Key points to remember:

Microtasks have priority over Macrotasks.

The Event Loop ensures that all Microtasks are completed before moving to the next Macrotask.

Examples of Microtasks: Promise.then, queueMicrotask, MutationObserver.


## 🔹 What is Starvation?

Starvation occurs when a task is perpetually blocked from execution because other higher-priority tasks continuously occupy the event loop.

In JavaScript:

Microtasks (e.g., Promise callbacks) have higher priority than Macrotasks (e.g., setTimeout).

If the Microtask Queue keeps filling up faster than it can be drained, the Event Loop may never get to the Callback Queue (Macrotask Queue).

This means tasks like setTimeout callbacks could be indefinitely delayed ⇒ starvation.

🔹 Example of Starvation in JavaScript

```javascript

console.log('Script start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log('Microtask: recursive promise');
    recursiveMicrotask();  // Recursively schedules another microtask
  });
}

recursiveMicrotask();

console.log('Script end');
```

🔔 Expected Output:

Script start
Script end
Microtask: recursive promise
Microtask: recursive promise
Microtask: recursive promise
... (infinite)

🔹 Explanation:

✅ Step-by-step breakdown:

1️⃣ console.log('Script start') runs synchronously.

2️⃣ setTimeout(..., 0) schedules a macrotask in the Callback Queue.

3️⃣ recursiveMicrotask() is invoked:

Inside it, a Promise resolves and schedules a .then() callback in the Microtask Queue.

After the current script finishes (Script end), the Event Loop begins draining the Microtask Queue.

Each time it executes recursiveMicrotask(), it adds a new microtask before returning to the Event Loop.

🔔 Result:

The Event Loop never reaches the Callback Queue where setTimeout lives because the Microtask Queue never empties ⇒ setTimeout is starved.

🔹 Summary (Interview-friendly answer):

🔔 Starvation in JavaScript occurs when the Event Loop is constantly busy processing higher-priority tasks (Microtasks) that continuously refill the queue, preventing lower-priority tasks (Macrotasks) like setTimeout from executing.

Common causes:

Excessive recursive scheduling of Promises.

Poor design where asynchronous tasks flood the Microtask Queue.

✅ Key takeaway:

Understand the priority: Microtask Queue drains completely before processing the next Macrotask ⇒ beware of infinite or heavy microtask chains causing starvation.