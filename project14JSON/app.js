const http = require('http');

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 3000;

const fileUtills = require('../module/fileUtills');

const today = require('../module/nowDate');

const template = require('../module/htmlTemplate');

let nowDate = today();

function notFound(res) {
  res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
  res.end("페이지를 찾을 수 없습니다.");
}

const server = http.createServer((req,res)=>{
  console.log(req.method);
  
  let filePath = fileUtills.getFilePath(req.url);
  
  let ext = fileUtills.getExtention(filePath);

  let contentType = fileUtills.getContentType(ext);

  if(req.method === 'GET'){
    console.log(req.url);
    fs.readFile(filePath, (err,data)=>{
      if(err){
        if(err.code === 'ENOENT'){
          res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
          res.end("페이지를 찾을 수 없습니다.");
        } else {
          res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 에러 발생", err);
        }
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      }
    });
  }  else if(req.method === 'POST'){
    if(req.url === '/index.html'){
      let body = '';
      req.on('data',(chunk)=>{
        body += chunk.toString();
      });
      req.on('end',()=>{
        const parsedData = new URLSearchParams(body);
        const title = parsedData.get('title');
        const content = parsedData.get('content');
  
        const jsonData = {
          title: title,
          content : content
        }
  
        const convertData = JSON.stringify(jsonData, null, 2);
        console.log(convertData);

        const transHTML = template(title, content);
        console.log(transHTML);
        
        fs.writeFile(path.join(__dirname, 'public','writePage',`${jsonData.title}.html`), transHTML,(err)=>{
          if(err){
            if(err.code === 'ENOENT'){
              res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("페이지를 찾을 수 없습니다!");
            } else {
              notFound(res);
            }
          }
        });
        
        fs.writeFile(path.join(__dirname, 'receiveJSON',`${jsonData.title}.json`), convertData, (err)=>{
          if(err){
            if(err.code === 'ENOENT'){
              res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("페이지를 찾을 수 없습니다!");
            } else {
              notFound(res);
            }
          }
        });

        fs.readFile('./public/index.html', (err,data)=>{
          if(err){
            if(err.code === 'ENOENT'){
              res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("페이지를 찾을 수 없습니다!");
            } else {
              res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("서버 에러 발생", err);
            }
          }
          res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        });
      });
    } else {
      notFound(res);
    }
  } else {
    notFound(res);
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error('에러발생 : ', err);
  }
  console.log('서버가 열렸습니다!');
  console.log(`http://localhost:${PORT}`);
})