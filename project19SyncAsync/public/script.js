const root = document.getElementById('root');

const fallSqure = document.getElementById('fallSqure');

function getRandomInt(min,max){
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}





function addBox(){
  setTimeout(()=>{
    let point = getRandomInt(0,100);
    let red = getRandomInt(0,255);
    let blue = getRandomInt(0,255);
    let green = getRandomInt(0,255);
    let box = document.createElement('div');
    box.style.position = 'absolute';
    box.style.left = point+'%';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.top = 0;
    box.style.border = '1px solid black';
    box.style.backgroundColor = `rgb(${red},${blue},${green})`;
    box.className = 'falling';
    root.appendChild(box);
    let num = 0;
  
    let fall = setInterval(()=>{
      num++;
      box.style.top = num+'%';
      if(num > 200){
        clearInterval(fall);
      }
    },16);
  },2000);
}

fallSqure.addEventListener('click', addBox);