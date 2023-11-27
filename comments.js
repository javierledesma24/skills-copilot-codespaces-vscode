// Create web server 

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  const src = fs.createReadStream('./bigImage.jpg');
  src.pipe(res);
}).listen(3000, () => console.log('Server started on port 3000'));
