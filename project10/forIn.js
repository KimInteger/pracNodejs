// ! if else를 사용할 경우 불필요하게 else를 모두 사용해야 한다. 
// ? 너무 가독성이 떨어지지 않나?
// ! try catch를 사용해보자!
function forObjectIfElse(a, b) {
  if (typeof a === "object") {
    if (typeof b === "object") {
      console.log("a, b 매개변수 모두 객체입니다.");
    } else {
      console.error("객체아님");
    }
  } else {
    console.log("객체 아님");
  }
}

// ! try catch의 경우 try만 보면된다!!
// ! catch는 error를 잡는 용도로 사용!
// ? 예외처리라고한다! catch로 예외처리!
function forObject(a,b) {
  try {
    if(typeof(a) === 'object') {
      if(typeof(b) === 'object') {
        console.log("감지했다!!");
        console.log("a, b 매개변수 모두 객체입니다.");
      }
    }
  } catch(error){
    console.error(error);
    console.error("하하하! 사람이 마치 개미같구나!");
    console.error("人がゴミに見える");
  }
};

const a = {first : 1};

const b = {first : 2};
// * 둘 모두 변수를 초기화 한 것이다. 

const c = "";

forObjectIfElse(a, b);

forObject(a,b);