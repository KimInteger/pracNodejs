const readline = require('node:readline');

const fs = require('fs');

const path = require('path');

const pokemonData = JSON.parse(fs.readFileSync('./pokemon.json','utf8'));
// ! JSON파일은 해석이 필요하다. 그래서 한번에 JSON.parse를 통해 변수에 할당

const rl = readline.createInterface({
  input : global.process.stdin,
  output : global.process.stdout
});

let answerData =[];
let score = 0;
let count = 0;

const interfactData = ()=>{
  rl.question('포켓몬스터 이름을 작성해주세요 : ', function
  (answer){

    // todo : 1. 답변을 받는다.
    // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
    // todo : 3. 존재한다면, 위 지역변수 배열에 추가한다.(append)
    // todo : 4. 존재한다면, score를 1점 추가한다.
    // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
    // todo : 6. '종료' 라고 말한다면, 질문을 종료하고, 결과를 보여준다.
    // todo : 7. 결과는 총 "포켓몬스터 socre개"를 작성하였습니다. 라는 로그를 남겨준다.
    
    if(pokemonData.includes(answer)){
      if(answerData.includes(answer)){
        if(count > 5){
          rl.question('부정행위 감지!!! 게임을 종료합니다!', (answer)=>{
            rl.close();
          })
        }
        rl.question('중복된 이름이 존재합니다! 꼼수는 안되요~',(answer)=>{
          count++;
          interfactData();
        })
      } else {
        answerData.push(answer);
        console.log(answerData);
        score++;
        interfactData();
      }
    } else {
      console.log(`당신이 아는 포켓몬은 : ${answerData} 가 있고`);
      console.log(`당신의 점수는 ${score}점입니다.`);
      rl.question('continue? (yes or no)', (answer)=>{
        if(answer === 'yes'){
          answerData = [];
          score = 0;
          interfactData();
        } else {
          rl.close();
        }
      })
    }
  });
}

interfactData();
// ! 재귀함수를 만드는 방법을 알아야 한다!