const http = require('http');

const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  function serverreadFile(reqUrl, path, contentType){
    if(req.url === reqUrl){
      const content = fs.readFileSync(path, "utf8")
    
      res.statusCode = 200;
      res.setHeader("Content-Type", contentType);
      res.write(content);
      res.end();
    }
  }
  if(req.method === 'GET'){
    /*
    * 들어가야 할 것
    ! if(req.url === ?){
      const 내용물 = fs.readFileSyne("경로", "인코딩방식");
      res.statusCode = 200;
      res.setHeader("Content-Type", 콘텐트타입방식)
      res.write(내용물);
      res.end();
    }
     */
    serverreadFile("/", "./public/index.html", "text/html");
    serverreadFile("/style.css", "./public/style.css", "text/css");
    serverreadFile("/script.js", "./public/script.js", "text/javascript");
    serverreadFile("/refresh.html", "./public/refresh.html", "text/html");
    serverreadFile("/index.html", "./public/index.html", "text/html");
  }
  console.log(req.url);
})

server.listen(port, console.log(`서버가 켜지는 중입니다. 포트번호는 ${port}입니다.`));
console.log(`http://localhost:${port}`)
