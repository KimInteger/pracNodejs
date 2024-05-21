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

let jsonData = {
  name : '김인티저',
  age : 29,
  live : '大田',
  language : ["한국어", "日本語"],
};

const convertJSON = JSON.stringify(jsonData, null, 2);
const test = fs.writeFileSync(`${nowDate}-${jsonData.name}.json`,convertJSON, {"Content-Type" :"application/json"}, function(error){
  if(error){
    console.error("에러입니다!", error);
  }
  console.log('The file has been saved!');
});



// ! 만드는 파일에 날짜를 붙이고 싶어용!