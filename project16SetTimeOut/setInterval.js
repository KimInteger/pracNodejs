// ? setInterval('하고싶은것', '실행 간격');

let intervalHandler = 0; // ? 상태변수. 어떤 상태일 때 이렇게 하겠다.
let timer = function(){
    setInterval(()=>{
      if(intervalHandler === 10){
        clearInterval();
      }
      console.log('1초' + intervalHandler);
      intervalHandler++;
  }, 1000);
}

timer();
