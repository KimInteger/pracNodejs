function objectLoop(array,object) {
  for(let key in object){
    array.push(object[key]);
  };
};

module.exports = objectLoop;
// ! CJS방식 commonJavaScript방식이다.