// function add(a,b){
//   let result = a + b;
//   // * 변수를 초기화하고 매개변수를 더해 값을 할당한다.
//   console.log(result);
//   // * 할당된 값을 확인한다.
//   return result;
//   // * 변수를 반환해줌으로써 값을 할당할 수도 있다.
// }


// let someData = add(1,2) + 100;
// // * someData 라는 변수에 add함수를 사용해서 반환된 3 + 100을 할당
// console.log(someData);

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
    if(url === '/'){
      filePath = "./public/index.html";
    } else {
      filePath = "./public" + url;
    }
    return filePath;
  },

  getExtention : function(filePath){
    let ext = path.extname(filePath);
    return ext.toLowerCase();
  },

  getContentType : function(ext){
    let contentType = "";
    if(mimeType.hasOwnProperty(ext)){
      contentType = mimeType[ext];
    }
    return contentType;
  }
};

const server = http.createServer((req,res)=>{
  console.log(req.url);

  let filePath = fileUtills.getFilePath(req.url);

  let ext = fileUtills.getExtention(filePath);

  let contentType = fileUtills.getContentType(ext);

  if(req.method === 'GET'){
    fs.readFile(filePath, (err,data)=>{
      if(err){
        if(err.code === 'ENOENT'){
          res.writeHead(404, {"Content-Type":"text/html"});
          res.end("페이지를 찾을 수 없습니다");
        } else {
          res.writeHead(500);
          res.end(`연결오류! ${err.code}`);
        }
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      }
    })
  }

});

server.listen(8080);
