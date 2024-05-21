const htmlMarkup = {
  head :"<title>htmlJSON연습</title>",
  body :"<h1>연습한다!</h1>"
}

function test(object) {
  let result = [];
  for(let key in object){
    result.push(`<${key}>${object[key]}</${key}>`);
  }
  // console.log(result);
  return result.join("");
}


test(htmlMarkup);


/* 
  ! 이거가지고
  ! 무엇을
  ! 할 수 있을까?
  ? 기아아아악
  * 갸아아아악
*/ 
