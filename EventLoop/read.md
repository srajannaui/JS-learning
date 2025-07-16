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