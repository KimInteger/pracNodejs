let counter = 0;


const timer = function(){
  setTimeout(()=>{
    console.log(counter+'vw');
    counter++;
    if(counter < 10){
      timer();
      // ! 재귀함수`
    } else {
      console.log(`${counter}초 세기가 종료되었습니다!`);
    }
  },16);
}

timer();

