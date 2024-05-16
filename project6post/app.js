const http = require('http');

const fs = require('fs');

const qs = require('querystring');

const server = http.createServer((req,res)=>{
  console.log(req.on);
  console.log(req.method);
  const indexHTML = fs.readFileSync("./public/index.html", "utf8");
  if(req.method === 'GET'){
    console.log(req.url);
    if(req.url === '/'){
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(indexHTML);
      res.end()
    }
  }
  if(req.method === 'POST'){
    if(req.url === '/test'){
      console.log(req.url);
      let info = '';
      req.on('data', function(data){
        console.log(data);
        // ! 암호화된 정보가 출력
        info += data;
        console.log(info);
        // ! 복호화된 정보가 할당됨
      });
      req.on('end', function(){
        let setInfo = qs.parse(info);
        // ! 복호화된 정보를 &을 기점으로 배열로 나눈 후 =을 기점으로 
        // ! 객체로 반환.
        console.log(setInfo);
        let name = setInfo.title;
        let content = setInfo.content;
        console.log(name);
        console.log(content);

        fs.writeFile(`./public/${name}.txt`, content, err=>{
          if(err){
            console.error(err);
          }
        });


        console.log("encoding:data : ", setInfo);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(indexHTML);
        res.end();
      });
    }
  }
})

server.listen(8080);