const fileUtills = require('./fileUtills')

const http = require('http');

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 8080;


const server = http.createServer((req,res) => {
  console.log(req.url);

  let filePath = fileUtills.getFilePath(req.url);

  let ext = fileUtills.getExtention(filePath);

  let contentType = fileUtills.getContentType(ext);

  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile(filePath, (err,data)=>{
        if(err){
          if(err.code === "ENOENT"){
            res.writeHead(404, {"Content-Type" : "text/plain; charset=UTF-8"});
            res.end("페이지를 찾을 수 없습니다.");
          } else {
            res.writeHead(500);
            res.end("서버 연결 에러!");
          }
        } else {
          res.writeHead(200, contentType);
          res.end(data);
        }
      });
    }
  } else if (req.method === 'POST'){
    if(req.url === '/submit'){
      let body = '';
      req.on('data', (chunk)=>{
        body += chunk.toString();
      });
      req.on('end', ()=>{
        const parseData = new URLSearchParams(body);
        // ! URLSearchParams는 반드시 new와 함께 써야 한다.
        console.log(parseData);
        const title = parseData.get('title');
        const content = parseData.get('content');

        const jsonData = {
          title : title,
          content : content
        }

        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(path.join(__dirname, "data.json"), jsonDataString, (err)=>{
          if(err){
            res.writeHead(500, {"Content-Type" : "text/plain; charset=UTF-8"});
            res.end("서버오류입니다.");
            return;
          } 
          res.writeHead(200, {"Content-Type" : "application/json"});
          console.log(contentType);
          let jsonResponse = JSON.stringify({message:"데이터를 감지했다!"});
          res.end(jsonResponse);
        });
      });
    } else {
      res.writeHead(404, contentType);
      res.end("페이지를 찾을 수 없습니다.");
    }
  } else {
    res.writeHead(404, contentType);
    res.end("페이지를 찾을 수 없습니다.");
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error('에러 발생 : ', err);
  }
  console.log("서버가 열렸습니다.");
  console.log(`http://localhost:${PORT}`);
})