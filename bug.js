const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }).catch(error => {
    console.error('Error:', error);
    // Properly handle the error and send an appropriate response
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  const result = await someAsyncOperation();
  if (result === null) {
      throw new Error('someAsyncOperation returned null');
  } 
  return result;
}

async function someAsyncOperation(){
    return null;
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});