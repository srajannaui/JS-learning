
# 1. Walk me through what happens when you type a URL and press Enter?

This README explains the end-to-end process that occurs when a user types a URL into a browser's address bar and presses Enter.

---

## 🔹 1️⃣ URL parsing and scheme resolution

- Browser checks what type of URL this is (e.g., `http://`, `https://`, `ftp://`).
- If scheme is missing, defaults to `http://`.

---

## 🔹 2️⃣ Check browser cache

- Browser checks if there’s a cached response for this URL:
  - DNS cache
  - HTTP cache (cached HTML, CSS, JS, images)
  - If valid cache found ⇒ shortcut to loading.

---

## 🔹 3️⃣ DNS resolution

- If no cached DNS entry:
  - Browser asks **OS resolver** ⇒ resolver queries DNS hierarchy:
    - Root DNS server
    - Top-level domain (TLD) DNS server (`.com`, `.net`, etc.)
    - Authoritative DNS server for domain (`example.com`)
  - Resolver returns **IP address of the server**.

---

## 🔹 4️⃣ Establish TCP connection (3-way handshake)

- Browser establishes a TCP connection with the server on port 80 (`http`) or 443 (`https`).
- If `https`, an additional step happens:
  - **TLS handshake** to set up encryption (SSL certificate verification, key exchange).

---

## 🔹 5️⃣ Send HTTP request

- Browser sends an **HTTP GET request** for the resource:

GET / HTTP/1.1

Host: example.com


- May include headers (e.g., `User-Agent`, cookies, etc.).

---

## 🔹 6️⃣ Server processes request and sends HTTP response

- Server processes the request and responds with:
- Status line (`200 OK`, `301 Moved Permanently`, `404 Not Found`, etc.)
- Response headers
- Response body (e.g., HTML document)

---

## 🔹 7️⃣ Browser receives response and starts rendering

- Browser begins rendering pipeline:
1️⃣ **Parse HTML** ⇒ build **DOM tree**.
2️⃣ **Parse CSS** ⇒ build **CSSOM tree**.
3️⃣ **Merge DOM + CSSOM into Render Tree**.
4️⃣ **Layout** ⇒ calculate positions of elements.
5️⃣ **Paint** ⇒ draw pixels on screen.

---

## 🔹 8️⃣ Additional requests triggered

- As browser parses HTML:
- Finds `<link>`, `<script>`, `<img>`, etc. ⇒ issues **more HTTP requests for resources**.
- Handles `async`/`defer` scripts, CSS blocking behavior, etc.

---

## 🔹 9️⃣ JavaScript execution & DOM updates

- Browser executes JavaScript that can manipulate DOM (via JS engine, e.g., V8 for Chrome).
- May cause additional network requests (AJAX, fetch, etc.).

---

## 🔹 🔟 Page load complete

- Once all critical resources loaded and parsed:
- `DOMContentLoaded` event fires.
- After images and other resources load ⇒ `window.onload` fires.

---

## 🔹 Summary (interview-friendly one-liner):

> 🔔 When you type a URL and press Enter:
> - Browser parses URL and checks cache
> - DNS resolution happens (get IP)
> - TCP/TLS handshake
> - HTTP request sent
> - Server responds with HTML
> - Browser parses HTML, requests sub-resources
> - Render tree built and page painted
> - JavaScript executes, DOM may update
> - Load events fired ⇒ page interactive

---

📖 Use this walkthrough as a structured, step-by-step reference for interviews and discussions.

---

unanswered questions 

2. How would you optimize a React app that's rendering 10,000 list items?

3. Explain the difference between == and === in JavaScript, then tell me when you'd use each.

4. Design a component that handles real-time data updates without causing performance issues.

5. How would you make a website accessible to users with disabilities?

6. What's the difference between debouncing and throttling? When would you use each?

7. Explain event bubbling and event capturing with a practical example.

8. How do you handle state management in a large React application?

9. How would you implement lazy loading for images in a web application?

10. Explain the concept of closures in JavaScript with a real-world example.

11. How do you ensure cross-browser compatibility in your applications?

12. What's your approach to testing frontend applications?

13. How would you handle API errors and loading states in a React app?

14. Explain the CSS box model and how it affects layout.

15. Tell me about a time you had to debug a particularly challenging frontend issues.

16. What are the differences between localStorage, sessionStorage, and cookies?
