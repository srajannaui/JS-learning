// Import the built-in HTTP module
const http = require('http');

// Define a port to listen on
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('Hello, world!\n');
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
