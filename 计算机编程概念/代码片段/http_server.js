const http = require("http");

const server = http
  .createServer((request, response) => {
    console.log(request);
    response.end("Hello world!");
  })
  .listen(3000);
