const test = {};

const test2 = ["key=talton", "content=와실행"];

// console.log(test2[0].includes("="));   // true
// console.log(test2[0].search(/=/));     // 3
// console.log(test2[1].search(/=/));     // 7

// let dot = test2[0].search(/=/);

// console.log(dot);      // 3
// let first = test2[0].substring(0,dot);
// let second = test2[0].substring(dot+1,test2[0].length);

// let fresh = {};
// fresh[first] = second;

// console.log(fresh);    // {key: 'talton}
// console.log(first);    // key
// console.log(second);   // talton



function devide(str){
  let newData = {};
  if(str.includes("=")){
    let dot = str.search(/=/);
    let key = str.substring(0,dot);
    let content = str.substring(dot+1, str.length);
    newData[key] = content;
  }
  Object.assign(test, newData);
}

for(let i = 0; i < test2.length; i++){
  devide(test2[i]);
}

console.log(test);