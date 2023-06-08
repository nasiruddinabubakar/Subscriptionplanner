const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createServer({
  target: 'http://127.0.0.1:5500/', // Replace with the appropriate target URL
  changeOrigin: true,
});

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Proxy the request
  proxy.web(req, res);
});

server.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
  process.exit();
});
