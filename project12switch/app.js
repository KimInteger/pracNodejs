const http = require('http');

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 3000;

const fileUtills = require('../module/fileUtills');

const server = http.createServer((req,res)=>{

  let filePath  = fileUtills.getFilePath(req.url);
  console.log(filePath);

  let ext = fileUtills.getExtention(filePath);
  console.log(ext);

  let contentType = fileUtills.getContentType(ext);
  console.log(contentType);
  
  
  let {method, url} = req;
  switch(method){
    case 'GET':
      switch(url){
        case '/' :
          fs.readFile(path.join(__dirname, './public/index.html'), (err,data)=>{
            if(err){
              res.writeHead(500, {"Content-Type": "text/plain; charset=UTF-8"});
              res.end("서버 연결 오류");
              return;
            } 
            console.log(contentType);
            res.writeHead(200,{"Content-Type" : contentType});
            res.end(data);
          });
          break;
          default :
          res.writeHead(404, {"Content-Type" : "text/plain; charset=UTF-8"});
          res.end("페이지 연결 오류");
          break;
      }
      break;
    
    case 'POST':
      switch(url){
        case '/submit':
          let body = '';
          req.on('data', (chunk)=>{
            body += chunk.toString();
          });

          req.on('end', ()=>{
            const parsedData = new URLSearchParams(body);
            const title = parsedData.get('title');
            const content = parsedData.get('content');

            const jsonData = {
              title : title,
              content : content
            };

            let writePath = path.join(__dirname, 'data.json');
            const jsonDataString = JSON.stringify(jsonData, null, 2);
            fs.writeFile(writePath, jsonDataString, (err)=>{
              if(err){
                res.writeHead(500, {"Content-Type" : "text/plain; charset=UTF-8"});
                res.end("서버연결 오류");
              }
              res.writeHead(200, {"Content-Type" : "application/json"});
              let jsonResponse = JSON.stringify({message :"데이터가 감지되었습니다."});
              res.end(jsonResponse);
            });
          });
          break;
          default:
          res.writeHead(404,{"Content-Type": "text/plain; charset=UTF-8"});
          res.end("페이지를 찾을 수 없습니다.");
          break;
      }
      break;
      default:
        res.writeHead(404,{"Content-Type": "text/plain; charset=UTF-8"});
        res.end("페이지를 찾을 수 없습니다.");
        break; 
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error('에러발생 : ', err);
  }
  console.log("서버 가동 시작!");
  console.log(`http://localhost:${PORT}`);
})