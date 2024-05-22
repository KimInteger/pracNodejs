let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 대전천 위로",
  c : "3. 고양이가 부수고 다닙니다."
}

function a() {
  console.log(fromData.a);
}

function b() {
  console.log(fromData.b);
}

function c() {
  console.log(fromData.c);
}

// a();
// b();
// c();

/*
  * 위에서 아래로 순서대로 출력된다.
  * 1. 꽁꽁 얼어붙은
  * 2. 대전천 위로
  * 3. 고양이가 부수고 다닙니다.
 */

setTimeout(function(){
  console.log('고양이가 다 때려부순다');
},1);

c();
a();
b();

/*
  * 위에서 아래로 순서대로 출력된다.
  * 3. 고양이가 부수고 다닙니다.
  * 1. 꽁꽁 얼어붙은
  * 2. 대전천 위로
 */