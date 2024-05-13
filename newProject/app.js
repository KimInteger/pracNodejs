/*
  ! 서버로 쓸 것임!
*/

const http = require('http');

const fs = require('fs');

const server = http.createServer(function(request,response){
  if(request.method === "GET" ){
    if(request.url === "/"){
      
      const first = fs.readFileSync("./public/index.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(first);
      response.end();
    }
    if(request.url === "/style.css"){
      
      const second = fs.readFileSync("./public/style.css", "utf8");
      
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css; charset=utf-8");
      response.write(second);
      response.end();
    }
    if(request.url === "/index.js"){
      
      const third = fs.readFileSync("./public/index.js", "utf8");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(third);
      response.end();
    }
    if(request.url === "/minam.html"){
      
      const forth = fs.readFileSync("./public/minam.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(forth);
      response.end();
    }
    if(request.url === "/index.html"){
      
      const forth = fs.readFileSync("./public/index.html", "utf8");
      
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(forth);
      response.end();
    }
    console.log(request.url);
  }
});

server.listen(3000);