console.time("first");
setTimeout(function(){
  console.timeLog('first');
  console.log('1. 슈퍼파월');

  console.time('first-1');
  setTimeout(function(){
    console.timeLog('first-1');
    console.log('2. 슈퍼히어로랜딩');
    console.timeEnd('first-1');
  },500);
  // 1번이 실행되고 다음에 2번이 실행된다 
  // 결국 최종적으로 3초후에 실행이 된다.
  // 절차적으로 실행이 됨을 확인할 수 있다.
  // 동기적으로 작동했다.

  console.timeEnd('first');
},490);

function a(){
  setTimeout(function(){
    console.log('2.슈퍼파월');
  },2000);
}

console.time('second');
setTimeout(function(){
  console.timeLog('second');
  console.log(1);
  a();
  console.timeEnd('second');
}, 1000);


// setTimeout(function(){
//   console.log('1.배성빈');
  
//   setTimeout(function(){
//     console.log('2.김정수')

//     setTimeout(() => {
//       console.log("3.조우식")
//     }, 1000);

//   }, 2000);

// }, 3000);
