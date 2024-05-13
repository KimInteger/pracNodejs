const http = require('http');

const fs = require('fs');

function serverReadFile(res, path, contentType, Code){
  fs.readFile(__dirname+ path, (err,data)=>{
    if(err){
      res.writeHead(500, {"Content-Type": "text/plain"});
      return res.end("500 - Internal Error");
    }
    res.writeHead(Code, {"Content-Type": contentType});
    res.end(data);
  });
}

const server = http.createServer(function(req, res){
  console.log(req.url);
  const path = req.url;
  switch(path){
    case "/":
      serverReadFile(res, "/public/index.html", "text/html", 200);
      break;
    case "/style.css":
      serverReadFile(res, "/public/style.css", "text/css", 200);
      break;
    case "/script.js":
      serverReadFile(res, "/public/script.js", "text/javascript", 200);
      break;
    case "/shout.html":
      serverReadFile(res, "/public/shout.html", "text/html", 200);
      break;
    case "/index.html":
      serverReadFile(res, "/public/index.html", "text/html", 200);
      break;
    case "/favicon.ico":
      break;
    default :
      serverReadFile(404, "/public/notFound.html", "text/html", 404);
      break;
    }
});

server.listen(3000, ()=> console.log(`서버가 작동중입니다! 연결된 포트는 3000번입니다!`));




// const path = "/public/index.html";


// let responseCode = 200;

// console.log(__dirname + path);

// const server = http.createServer((req,res)=>{
//   fs.readFile(__dirname + path, "utf8", (err,data)=>{
//     if(err){
//       console.error("에러 발생 : ", err);
//     }
//       res.writeHead(responseCode, {"Content-Type" : "text/html"});
//       res.end(data);
//   });
//   console.log(req.url);
// })

// server.listen(3000);