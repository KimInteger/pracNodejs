const http = require('node:http');

const fs = require('node:fs');

const PORT = process.env.PORT || 3000;

const fileUtills = require('../module/fileUtills');

const server = http.createServer((req,res)=>{
  if(req.url === '/favicon.ico'){
    return;
  }

  let filePath = fileUtills.getFilePath(req.url);

  let ext = fileUtills.getExtention(filePath);

  let contentType = fileUtills.getContentType(ext);

  const file = fs.readFileSync(filePath,'utf8');
  
  if(req.method === 'GET'){
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.write(file)
    res.end();
  }
});

server.listen(PORT, (err)=>{
  if(err){
    console.error(err);
  }
  console.log('서버 열렸다도르');
  console.log(`http://localhost:${PORT}`);
})