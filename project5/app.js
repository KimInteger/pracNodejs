const http = require('http');

const fs = require('fs');

const queryString = require('querystring');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    console.log("요청 URL 검사 :", req.url);
    if(req.url === '/'){
      fs.readFile("./public/index.html", (err,data)=>{
        if(err){
          console.error("에러가났어 에러가! : ",err);
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
      })
    }
    // console.log(req.url.startsWith("/test"));
    if(req.url.startsWith("/test")) {
      console.log(req.url.split("?"));
      const inputData = req.url.split("?")[1];
      // ! url에 queryString이라는 이름의 규칙이 보여서 적당히 잘라서
      // ! 사용하려고 해
      const data = queryString.decode(inputData);
      // ! 받아온 데이터 해석해줄래?
      console.log(data);
      // ! 해석한 것을 콘솔에 찍어줘
      
      fs.writeFile(`./public/${data.name}.txt`, data.content, err => {
        if(err){
          console.error(err);
        }
      });
      //       console.log(req.url.split('?'));
      //       const firstData = req.url.split('?')[1];
      //       const secondData = firstData.split('&');
      //       console.log(secondData); // 객체가 분리되있음을 확인
      
      //       const data = {};
      
      //       function devide(str){
      //         let newData = {};
      //         if(str.includes("=")){
      //           let dot = str.search(/=/);
      //           let key = str.substring(0,dot);
      //           let content = str.substring(dot+1, str.length);
      //           newData[key] = content;
      //         }
      //         Object.assign(data, newData);
      //       }
      
      //       for(let i = 0; i < secondData.length; i++){
      //         devide(secondData[i]);
      //       }
    }
  }
})

server.listen(8080, 
  console.log("서버가동중! 포트번호 8080"),
  console.log(`http://localhost:8080/`));