# 📖 Understanding Trust Issues with `setTimeout` in JavaScript

## ⚡ Introduction

`setTimeout` is a fundamental function in JavaScript used for scheduling callbacks after a specified delay. However, many developers encounter **"trust issues" with `setTimeout`** because it often behaves differently than they expect.

This README explains:
- Why `setTimeout` is not perfectly reliable for precise timing.
- How timing drift occurs.
- How it compares to `setInterval`.
- Best practices for use.

---

## 🔍 How `setTimeout` Works

Example:
```js
setTimeout(() => {
  console.log('Hello after 1000ms');
}, 1000);
```
👉 Expectation: Callback runs after exactly 1000 ms.

👉 Reality: Callback runs after at least 1000 ms, but actual execution time can be longer due to:

Event loop blocking.

Execution time of other tasks.

Browser throttling in inactive tabs.

⚠️ Why "Trust Issues"?
1️⃣ Delay is a Minimum, Not Exact
setTimeout ensures a minimum delay before execution but doesn't guarantee precise timing.

Example:

```js
const start = Date.now();
setTimeout(() => {
  console.log(`Elapsed: ${Date.now() - start} ms`);
}, 2000);
```

// Blocking the thread for 5s:
while (Date.now() - start < 5000) {}
💥 Output: Prints after ~5s instead of 2s due to event loop blocking.

2️⃣ Timing Drift with setTimeout Loops
Using setTimeout in a loop accumulates execution delays:

```js
let start = Date.now();
let count = 0;

function tick() {
  const expected = start + (++count * 1000);
  const actual = Date.now();
  const drift = actual - expected;
  console.log(`Tick #${count} | Drift: ${drift} ms`);

  setTimeout(tick, 1000);
}

tick();
```

Even small delays accumulate over time, causing drift.

3️⃣ setInterval Comparison
```js
let intervalStart = Date.now();

setInterval(() => {
  const now = Date.now();
  const elapsed = now - intervalStart;
  console.log(`Elapsed: ${elapsed} ms`);
}, 1000);
```

setInterval schedules executions every ~1000 ms but:

Execution time of the callback itself still affects precision.

Can drift if callback execution is slow.

🔥 Simulating Event Loop Blocking
Example showing compounded drift due to blocking:

```js
function tick() {
  const start = Date.now();
  setTimeout(() => {
    const elapsed = Date.now() - start;
    console.log(`Expected 1000ms, actually took ${elapsed}ms`);
  }, 1000);

  // Simulate blocking:
  const blockStart = Date.now();
  while (Date.now() - blockStart < 500) {}
}

tick();
```

✅ Best Practices
Do not assume precise timing: setTimeout(fn, 1000) means "after at least 1000ms".

Account for drift: If accuracy matters, record actual timestamps.

Use requestAnimationFrame for UI animations: It syncs with display refresh rates.

Break up long-running tasks: Prevent blocking the event loop.

🔔 Summary
💡 "Trust issues with setTimeout" reflect common misunderstandings about how timers behave in JavaScript's single-threaded, event-loop-driven environment.
Use setTimeout with awareness of these limitations, and prefer alternatives like requestAnimationFrame when appropriate.

📦 Example files provided:

timeout-drift.js: Demonstrates timing drift in setTimeout.

interval-drift.js: Demonstrates how setInterval behaves.

blocking-demo.js: Shows how event loop blocking delays timer callbacks.