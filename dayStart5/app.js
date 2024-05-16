const http = require('http');

const fs = require('fs');

const test = require('./test');

const server = http.createServer((req,res)=>{
  function serverReadFile(url, filePath, contentType){
    if(req.url === url){
      const file = fs.readFileSync(filePath ,'utf8');
      res.statusCode = 200;
      res.setHeader("Content-Type", contentType);
      res.write(file);
      res.end();
    }
  }
  if(req.method === 'GET'){
    serverReadFile("/","./public/index.html","text/html");
    serverReadFile("/next.html","./public/next.html","text/html");
    serverReadFile("/style.css","./public/style.css","text/css");
    serverReadFile("/script.js","./public/script.js","text/javascript");
    serverReadFile("/index.html","./public/index.html","text/html");
  }
})

test("감삼다");

// server.listen(8080, console.log("서버 가동중!"));