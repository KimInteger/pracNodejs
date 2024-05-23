const readline = require('node:readline');

const fs = require('fs');

const path = require('path');

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
  let data = [];
  pokemonData.forEach((Element) => {
    if(answer === Element){
      data.push(Element);
      rl.close();
    }
  });
  console.log(data);
  if(data.length === 0){
    console.log('그런건 포켓몬이 아니야아아아아!!');
  } else {
    console.log('당신은 포켓몬을 알고 있군요? 맞아요 그 포켓몬 이름은', answer);
    fs.writeFile(path.join(__dirname,'search.json'),JSON.stringify(data),'utf8',(err)=>{
      if(err){
        console.error('안됬지롱');
      }
    })
  }
  rl.close();
});

// 1. 응답을 받고,
// 2. 조회를 하고,
// 3. 값이 있다면, 배열에 추가
// 4. 확인을 하고,
// 5. 파일을 만든다.
