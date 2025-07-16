JavaScript Execution in the Browser — Diagram Explanation

This README explains the flow of how JavaScript executes in a browser environment, referencing the accompanying diagram (compressed_diagram.png).

🔹 Overview of the diagram

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


🔔 Explanation for mircrotask.js :
✅ What happens step-by-step:

1️⃣ console.log('Script start') — synchronous → prints immediately
2️⃣ setTimeout(...) scheduled → callback goes into Macrotask Queue (Callback Queue)
3️⃣ Promise.resolve().then(...) scheduled → callback goes into Microtask Queue
4️⃣ queueMicrotask(...) scheduled → goes into Microtask Queue
5️⃣ console.log('Script end') — synchronous → prints immediately

🔔 After script execution completes:

👉 The Event Loop runs all Microtasks before any Macrotask:

Promise.then callback → prints

queueMicrotask callback → prints

👉 Then it picks next Macrotask:

setTimeout callback → prints

✅ Key takeaway (interview-ready summary):

Microtasks (e.g., Promise.then, queueMicrotask) are executed after the current script and before any Macrotask (like setTimeout).

Macrotasks (callback queue tasks) wait for the Microtask Queue to drain before running.


🔹 What is Starvation?

👉 Starvation occurs when a task is perpetually prevented from executing because other higher-priority tasks keep running and blocking it from progressing.

In JavaScript, this can happen when:

The Microtask Queue keeps getting filled with new microtasks faster than they can drain, preventing the Event Loop from ever reaching the Callback Queue (Macrotasks) ⇒ effectively starving macrotasks like setTimeout.

✅ What happens in starvation.js :

recursiveMicrotask continuously schedules itself as a new microtask.

The Event Loop never gets a chance to return to the Callback Queue (macrotasks like setTimeout).

As a result, the setTimeout callback is starved indefinitely.

🔹 📖 Explanation (interview-friendly summary):
🔔 Starvation in JavaScript occurs when the Event Loop is constantly occupied with higher-priority tasks (like microtasks), preventing lower-priority tasks (like macrotasks) from executing.

Example scenario:

Recursive Promise.then() calls keep adding new microtasks faster than they can complete.

This prevents the Event Loop from processing setTimeout or UI updates ⇒ starvation of macrotasks.