const readline = require('node:readline');

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout
};

const rl = readline.createInterface(inOut);

console.dir(rl);

// ! 만들고 싶은 제목의 파일 만들기

const fs = require('node:fs');

const path = require('node:path');

rl.question('만들고싶은 파일의 이름을 말해주세요! : ',
function(answer){
  let data = answer;

  fs.writeFile(path.join(__dirname,`${data}.txt`),"kyao", (err)=>{
    if(err){
      console.error('생성실패!');
    }
  })

  rl.close();
})

// ! 요청과 응답이네?

/*
* 리스트 업.
? 1.
! 재귀함수로 첫 질문으로 돌아가게 하기



! 포켓몬 아는 이름 쓰기, 계속해서 누적되게.
! 즉, 원래대로 돌아가고 카운트가 올라가는 것.
! 마지막에 틀리면 종료시키고 카운트를 반환.
? 함수안에 count를 하나 선언하고, i++를 하고 틀리면 count값을 console에 찍어주는형식
? 즉 하려면 재귀함수를 선언할줄 알아야함
? 그리고 if count 100을 넘어가면, 추가로 출력될것도 만들자. 그런식으로.
 */