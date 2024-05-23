const readline = require('node:readline');

const fs = require('fs');

const pokemonData = JSON.parse(fs.readFileSync('./pokemon.json','utf8'));
// ! JSON파일은 해석이 필요하다. 그래서 한번에 JSON.parse를 통해 변수에 할당

/*
* 검증을 거친다.  
* console.log(pokemonData);
? 제대로 할당은 되었는가?
* console.log(typeof(pokemonData));
? 타입은 뭐지? // object
* console.log(Array.isArray(pokemonData))
? 이거 배열임? // true;
*/


const rl = readline.createInterface({
  input : global.process.stdin,
  output : global.process.stdout
});

rl.question('포켓몬스터 이름을 작성해주세요 : ', function
(answer){
  for(let i = 0; i < pokemonData.length; i++){
    if(answer === pokemonData[i]){
      console.log("No.",i+1,`${answer}`);
      rl.close();
      break;
    } else {
      console.log('당신은 포켓몬도 모릅니까?');
      rl.close();
    }
  }
});








// rl.question('포켓몬의 이름을 작성해주세요. : ',(answer)=>{
//   if(pokemonData.includes(answer)){
//     console.log(`당신은 ${answer}를 좋아하시는 군요! 저도 그렇습니다.`);
//     rl.close();
//   } else {
//     console.log('그건 포켓몬이 아니야!!!');
//     rl.close();
//   }
// })

