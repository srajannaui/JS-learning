# Button Click Counter using Closures (Encapsulated, No Globals)

This example demonstrates how to implement a **button click counter using a closure to encapsulate state**, ensuring no global variables are used.

---

## 🔹 Objective:

✅ Requirements:
- Count and display how many times a button has been clicked.
- Use a callback function registered via `addEventListener`.
- Ensure that `clickCount` is **private (encapsulated via closure)**.

---

## 🔹 Example Code:

```html
<button id="clickBtn">Click Me!</button>
<p id="counter">Button clicked 0 times.</p>

<script>
  (function() {
    const button = document.getElementById('clickBtn');
    const counter = document.getElementById('counter');

    // Closure encapsulation pattern
    function createClickCounter() {
      let count = 0; // Private variable in closure

      return function() {
        count++;
        counter.textContent = `Button clicked ${count} ${count === 1 ? 'time' : 'times'}.`;
      };
    }

    const handleClick = createClickCounter(); // handleClick closes over `count`

    button.addEventListener('click', handleClick);
  })();
</script>
```

🔹 Explanation:
Closure principle:

createClickCounter is a factory function that:

Defines a private count variable.

Returns a function that increments and displays count.

Even after createClickCounter finishes executing, the returned function retains access to count due to closure.

Encapsulation:

No variables (count, handleClick) leak into the global scope.

count is inaccessible from outside — fully private state.

Callback pattern:

handleClick is passed as a callback to addEventListener.

Invoked every time the button is clicked.

🔹 Benefits of this approach:
✅ Why this is "better and optimal":

count is hidden from global scope (true encapsulation).

Clean separation of concerns:

DOM references scoped locally.

State encapsulated in closure.

Callback registered clearly.