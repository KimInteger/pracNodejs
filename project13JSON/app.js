const fs = require("node:fs");

const today = require("../module/nowDate.js");

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth()+1;
// const day = date.getDate();

// console.log(typeof(year)); // num
// console.log(month);
// console.log(day);
// console.log(year+"-"+month+"-"+day);


nowDate = today();
console.log(nowDate);

const htmlMarkup = {
  head : {
    title : "json연습",
  body : {
    header : "메뉴부분",
    main : "메인부분",
    footer : "하단부분"
  },
}
}
/*
 *<head>
    <title></title>
  </head>
  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
*/



const convertJSON = JSON.stringify(htmlMarkup, null, 2);
const test = fs.writeFileSync(`${nowDate}-${htmlMarkup.head.title}.json`,convertJSON, {"Content-Type" :"application/json"}, function(error){
  if(error){
    console.error("에러입니다!", error);
  }
  console.log('The file has been saved!');
});



// ! 만드는 파일에 날짜를 붙이고 싶어용!