// Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  const src = fs.createReadStream('./bigImage.jpg');
  src.pipe(res);
}).listen(3000, () => console.log('Server started on port 3000'));
