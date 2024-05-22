const moveS = document.getElementById('moveS');

const squre = document.getElementById('squre');

let num = 50;



moveS.addEventListener('click',moveBox);

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let boxState = false;

let count = 0;

moveS.addEventListener('click',()=>{
  count++;
})

function moveBox() {
  if(boxState !== true){
    let moveLeft = setInterval(()=>{
      let red = getRandomInt(0,255);
      let blue = getRandomInt(0,255);
      let green = getRandomInt(0,255);
      num++;
      squre.style.right = `${num}%`;
      squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
      if(count % 2 === 0){
        clearInterval(moveLeft);
        boxState = true;
      }
    },1);
  } else {
    let moveRight = setInterval(()=>{
      let red = getRandomInt(0,255);
      let blue = getRandomInt(0,255);
      let green = getRandomInt(0,255);
      num--;
      squre.style.right = `${num}%`;
      squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
      if(count % 2 === 0){
        clearInterval(moveRight);
        boxState = false;
      }
    },1);
  }
};

/*
! 끝까지 간다음에 눌러야 정상 작동하는 함수
* boolean값으로 핸들링할 수 있도록 만들어 봅시다.
*/

// moveS.addEventListener('click',moveL);

// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// function moveL(){
//   let moveLeft = setInterval(()=>{
//       let red = getRandomInt(0,255);
//       let blue = getRandomInt(0,255);
//       let green = getRandomInt(0,255);
//       num++;
//       squre.style.right = `${num}%`;
//       squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
//       if(num === 110){
//         clearInterval(moveLeft);
//         moveS.addEventListener('click', moveR);
//         moveS.removeEventListener('click',moveL);
//       }
//     },16);
// }

// function moveR(){
//   let moveRight = setInterval(()=>{
//     let red = getRandomInt(0,255);
//     let blue = getRandomInt(0,255);
//     let green = getRandomInt(0,255);
//     num--;
//     squre.style.right = `${num}%`;
//     squre.style.backgroundColor = `rgb(${red},${blue},${green})`;
//     if(num === -50){
//       clearInterval(moveRight);
//       moveS.addEventListener('click',moveL);
//       moveS.removeEventListener('click', moveR);
//     }
//   },16);
// }
