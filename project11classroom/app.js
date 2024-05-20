const http = require('http');

const fs = require('fs');

const path = require('path');

const server = http.createServer((req,res)=>{
  console.log(req.url);

  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile(path.join(__dirname, "./public/index.html"), (err,data)=>{
        if(err){
          console.log(err);
          res.writeHead(500, {"Content-Type" : "text/plain"});
          res.end("500코드는 서버 자체의 에러!");
          return;
        }
        res.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
        res.end(data);
      });
    } else {
      res.writeHead(404, {"Content-Type" : "text/html"});
      res.end("404 : Not Found");
    }
  } else if (req.method === 'POST'){
    // * POST요청처리
    if(req.url === '/submit'){
      let body = '';
      req.on('data', (chunk)=>{
        body += chunk.toString();
      });
      
      req.on('end', ()=>{
        const parseData = new URLSearchParams(body);
        // console.log(parseData);
        const title = parseData.get('title');
        console.log(title);
        const content = parseData.get('content');
        console.log(content);

        const jsonData = {
          title: title,
          content : content
        };
        console.log(jsonData);

        const jsonDataString= JSON.stringify(jsonData, null, 2);
        // * JSON,stringify(문자열로 변환할 값, 속성선택 null시 전부, space수 공백의 칸 수  )
        fs.writeFile(path.join(__dirname, "data.JSON"), jsonDataString, (err)=>{
          if(err){
            res.writeHead(500, {"Content-Type" : "text/plain; charset=UTF-8"});
            res.end("서버 자체 에러")
          }
          res.writeHead(200, {"Content-Type" : "application/json; charset=UTF-8"});
          let jsonResponse = JSON.stringify({message : "데이터가 성공적으로 저장됨"});
          res.end(jsonResponse);
        })
      });
    } else {
      res.writeHead(404, {"Content-Type" : "text/plain; charset=UTF-8"});
      res.end("404 페이지를 찾을 수 없습니다.");
    }
  } else {
    res.writeHead(404, {"Content-Type" : "text/plain; charset=UTF-8"});
    res.end("404 페이지를 찾을 수 없습니다.");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
  console.log("서버가동중?");
  console.log(`http://localhost:${PORT}`);
})