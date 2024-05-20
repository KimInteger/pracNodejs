const http = require('http');

const fs = require('fs');

const path = require('path');

const mimeType = {
  ".html" : "text/html; charset=UTF-8",
  ".css" : "text/css",
  ".js" : "application/js",
  ".json" : "application/json",
  ".ico" : "img/x-icon"
};

const fileUtills = {
  getFilePath : function(url){
    let filePath = "";
    if(url === "/"){
      filePath = "./public/index.html";
    } else {
      filePath = "./public" + url;
    }
    return filePath;
  },

  getFileExtention : function(filePath){
    let ext = path.extname(filePath);
    return ext.toLowerCase();
  },

  getContentType : function(ext){
    let contentType = "";
    if(mimeType.hasOwnProperty(ext)){
      contentType = mimeType[ext];
    } else {
      contentType = "text/plain";
    }
    return contentType;
  }
};

const server = http.createServer((req,res)=>{
  console.log(req.url);

  let filePath = fileUtills.getFilePath(req.url);
  console.log(filePath);

  let ext = fileUtills.getFileExtention(filePath);
  console.log(ext);

  let contentType = fileUtills.getContentType(ext);
  console.log(contentType);

  if(req.method === 'GET'){
    // fs.readFile(filePath, (err,data)=>{
    //   if(err){
    //     console.log(err);
    //   }
    //   res.writeHead(200, {"Content-Type" : contentType});
    //   res.end(data);
    // })
    fs.readFile(filePath, (err,data)=>{
      if(err){
        if(err.code === 'ENOENT'){
          console.dir(err);
          res.writeHead(404, {"Content-Type": "text/html"});
          res.end("404 : NOT FOUND");
        } else {
          res.writeHead(500);
          res.end(`연결 오류 ${err.code}`);
        }
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      }
    })
  }
});

server.listen(8080, function(err){
  if(err){
    console.log("에러발생!", err);
  }
  console.log("서버가 가동중입니다.");
  console.log("http://localhost:8080");
})