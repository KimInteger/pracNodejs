const http = require('http');

const fs = require('fs');

const path = require('path');

const fileUtills = require('../module/fileUtills');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  if(req.url === '/favicon.ico'){
    return;
  }
  let filePath = fileUtills.getFilePath(req.url);

  let ext = fileUtills.getExtention(filePath);

  let contentType = fileUtills.getContentType(ext);
  console.log(contentType);

  if(req.method === 'GET'){
    fs.readFile(filePath, (err,data)=>{
      if(err){
        res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
        res.end("서버 연결 오류");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type",contentType);
      res.write(data);
      res.end();
    })
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error(err);
  }
  console.log(`http://localhost:${PORT}`);
})