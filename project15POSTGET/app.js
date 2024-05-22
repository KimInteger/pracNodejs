const http = require('http');

const fs = require('fs');

const qs = require('querystring');

const path = require('path');

const PORT = process.env.PORT || 3000;

function notFound(res){
  res.writeHead(404, {"Content-Type": "text/plain; charset=UTF-8"});
  res.end("페이지를 찾을 수 없습니다");
}

const server = http.createServer((req,res)=>{
  console.log(typeof(req.url));
  console.log(req.method);

  let getUrl = '';

  if(req.url.startsWith('/get')){
    getUrl = req.url;
  }
  
  console.log(getUrl);
  
  let {method, url} = req;
  switch(method){
    case "GET":
      switch(url){
        case '/' :
          fs.readFile('./public/index.html', (err,data)=>{
            if(err){
              res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("서버 연결 오류");
              return;
            }
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(data);
          });
          break;
        case getUrl:
          const urlData = req.url.split('?')[1];

          console.log(urlData);

          const encodeData = qs.decode(urlData); 

          const convertJson = JSON.stringify(encodeData,null,2);

          console.log(encodeData);

          fs.writeFile(path.join(__dirname,`${encodeData.name}.txt`), convertJson, (err)=>{
            if(err){
              console.error(err);
            }
          });
          fs.readFile(path.join(__dirname,'public','index.html'), (err,data)=>{
            if(err){
              res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
              res.end("서버 연결 오류");
              return;
            }
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(data);
          })
          break;
          default:
          notFound(res);
        }
        break;

    case "POST":
      switch(url){
        case "/post":
        let body = "";
        req.on('data', (chunk)=>{
          body += chunk.toString();
        });
        req.on('end', ()=>{
          const parsedData = new URLSearchParams(body);
          const name = parsedData.get('name');
          const hobby = parsedData.get('hobby');

          let jsonData = {
            name : name,
            hobby : hobby
          };

          const convertData = JSON.stringify(jsonData, null, 2);
          fs.writeFile(path.join(__dirname,`${name}.json`),convertData,(err)=>{
            if(err){
              console.error(err);
            }
          });
        });
        fs.readFile(path.join(__dirname,'public','index.html'), (err,data)=>{
          if(err){
            res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
            res.end("서버 연결 오류");
            return;
          }
          res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
          res.end(data);
        });
        break;
        default:
          notFound(res);
      }
      break;
      default:
        notFound(res);
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error('에러 발생 : ', err);
  }
  console.log("서버 열렸다도르");
  console.log(`http://localhost:${PORT}`);
});