const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    function serverli(url,path,contentType){
      if(req.url === url) {
        const ht = fs.readFileSync(`./public/${path}`, 'utf8');
        res.statusCode = 200;
        res.setHeader("Content-Type", contentType);
        res.write(ht);
        res.end();
      }
    }
      serverli("/",'index.html','text/html');
      serverli('/style.css','style.css','text/css');
      serverli('/script.js','script.js','text/javascript');
      serverli('/sayho.html','sayho.html','text/html');
      serverli('/index.html','index.html','text/html');
  }
  console.log(req.url);
})

server.listen(3000);