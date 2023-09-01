// Import the required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a 200 OK status and plain text content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the "Hello, World!" message as the response
  res.end('Hello, World!\n');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
