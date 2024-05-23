const readline = require('node:readline');

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout
};

const rl = readline.createInterface(inOut);

console.dir(rl);

rl.question('너의 이름은 무엇입니까? : ', function(answer){
  console.log(`당신의 이름은 ${answer}입니다.`);
  rl.close();
});

rl.question('내가 좋아하는 동물은?',(answer)=>{
  if(answer === '그리즐리베어'){
    console.log('정답입니다!');
    rl.question('그러면 어떤 색상의 곰을 좋아할까요?',(sAnswer)=>{
      if(sAnswer ==='검은색'){
        console.log('정답입니다!');
        rl.close();
      } else {
        console.log("틀렸어요! 유 퍼킹 레이시스트!");
        rl.close();
      }
    })
  } else {
    console.log('틀렸어요! 당신은 반으로 찢길 수 있습니다!');
    rl.close();
  }
})