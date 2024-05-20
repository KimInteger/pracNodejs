const objectLoop = require('./module.objectLoop.js');
const someData = require('./module_object.js');

console.log(someData);

function forObject(a,b) {
  try {
    if(typeof(a) === 'object') {
      if(typeof(b) === 'object') {
        let values = [];

        objectLoop(values, a);
        objectLoop(values, b);
        // ! 모듈로 불러온 objectLoop를 사용.
        // ? objectLoop는 배열에 객체의 값을 추가하는 용도이다.

        console.log(values);

        let addValues = values.reduce((a,b)=>{
          return a + b;
        });
        // ! array.prototype.reduce Method를 확인하도록 하자.

        console.log("다 더한 값 : ", addValues);
      }
    }
  } catch(error){
    console.error(error);
    console.error("하하하! 사람이 마치 개미같구나!");
    console.error("人がゴミに見える");
  }
};

// * 둘 모두 변수를 초기화 한 것이다. 


forObject(someData.a,someData.b);
// * 호출한 someData를 사용한다. someData는 객체이고 그중 키로 가진 a와 b도 객체이다.