// ! if else를 사용할 경우 불필요하게 else를 모두 사용해야 한다. 
// ? 너무 가독성이 떨어지지 않나?
// ! try catch를 사용해보자!
// function forObjectIfElse(a, b) {
//   if (typeof a === "object") {
//     if (typeof b === "object") {
//       console.log("a, b 매개변수 모두 객체입니다.");
//     } else {
//       console.error("객체아님");
//     }
//   } else {
//     console.log("객체 아님");
//   }
// }
const a = {
  first : 1,
  second : 2
  };

const b = {first : 2};


// ! try catch의 경우 try만 보면된다!!
// ! catch는 error를 잡는 용도로 사용!
// ? 예외처리라고한다! catch로 예외처리!
function forObject(a,b) {
  try {
    if(typeof(a) === 'object') {
      if(typeof(b) === 'object') {
        let values = [];
        for(let key in a) {
          console.log(key);
          // ? a,와 b가 객체이기때문에 반복문을 돌릴 수 없다.
          // ! 매개변수를 반복형태로 쓴다하여 '반복자'라고 한다.
          values[0] = a[key];
          // ! 배열로 초기화한 values의 인덱스번호 0번째에 a[key]의 값을 할당.
          console.log(values);
        }
        for(let key in b){
          values[1] = b[key];
        }
        console.log(values);

        let addValues = values[0] + values[1];

        console.log("다 더한 값 : ", addValues);




        // ? let result = a.first + b.first;
        // ! 치명적인 단점! first가 리터럴이기 때문에 한번만 사용할 수 있는 코드
        // ! a, b에 first라는 키가 있어야한다는 치명적인 단점이 있다.
        // ! first가 없으면 사용할 수 없는 함수
      }
    }
  } catch(error){
    console.error(error);
    console.error("하하하! 사람이 마치 개미같구나!");
    console.error("人がゴミに見える");
  }
};

// * 둘 모두 변수를 초기화 한 것이다. 


forObject(a,b);
