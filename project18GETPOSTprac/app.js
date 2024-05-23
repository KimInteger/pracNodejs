const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const PORT = process.env.PORT || 3000;

const qs = require('node:querystring');


function notFound(res){
  res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
  res.end("페이지를 찾을 수 없습니다");
}

const server = http.createServer((req,res)=>{
  if(req.url === '/favicon.ico'){
    return;
  }
  
  let getUrl = '';
  
  if(req.url.startsWith('/get')){
    getUrl = req.url;
  }

  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 연결 오류");
        }
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      });
    } else if (req.url === getUrl){
      let getData = getUrl.split('?')[1];
      const encodeData = qs.decode(getData);

      fs.writeFile(path.join(__dirname , `${encodeData.title}.json`),JSON.stringify(encodeData, null, 2),(err)=>{
        if(err){
          console.error(err);
        }
      });

      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 연결 오류");
        }
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      });
    } else {
      notFound(res);
    }

  } else if (req.method === 'POST'){
    let body = '';
    req.on('data', (chunk)=>{
      body += chunk.toString();
    });
    req.on('end', ()=>{
      const parsedData = new URLSearchParams(body);
      const title = parsedData.get('title');
      const content = parsedData.get('content');

      const jsonData = {
        title: title,
        content: content
      }
      
      fs.writeFile(path.join(__dirname,`${title}.json`),JSON.stringify(jsonData, null, 2),(err)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 연결 오류");
        }
      });

      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 연결 오류");
        }
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      });
    });
  } else {
    notFound(res);
  }
});

server.listen(PORT, function(err){
  if(err){
    console.error("에러 발생 : ", err);
  }
  console.log("서버가 열렸다도르");
  console.log(`http://localhost:${PORT}`);
})