const memberNames = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const validationCheck = [false,false,false,false,false];

const name = document.getElementById('inputName');

const password = document.getElementById('inputPass');

const checkPass = document.getElementById('inputCheck');

const email = document.getElementById('inputEmail');

const phoneNum = document.getElementById('inputPhone');

const checkBool = document.getElementsByClassName('checkBool');

const submit = document.getElementById('submit');

complateValidation(validationCheck);


function checkMyName(e){
  if(memberNames.includes(e.target.value)){
    console.log(validationCheck);
    checkBool[0].style.backgroundColor = 'green';
    checkPassword();
    validationCheck[0] = true;
    complateValidation(validationCheck);
    return complateValidation(validationCheck);
  } else {
    console.log(validationCheck);
    checkBool[0].style.backgroundColor = 'red';
    checkPassword();
    validationCheck[0] = false;
    return complateValidation(validationCheck);
  }
}

let passwordNum = '';


function checkPassword(){
  if(password.value === name.value+passwordNum){
    if(name.value === ''){
      return
    } else {
      checkBool[1].style.backgroundColor = 'green';
      checkPasswordCheck()
      validationCheck[1] = true;
      return complateValidation(validationCheck);
    }
  } else {
    checkBool[1].style.backgroundColor = 'red';
    checkPasswordCheck()
    validationCheck[1] = false;
    return complateValidation(validationCheck);
  }
}

function checkPasswordCheck(){
  if(checkPass.value === password.value && checkPass.value === name.value+passwordNum){
    checkBool[2].style.backgroundColor = 'green';
    validationCheck[2] = true;
    return complateValidation(validationCheck);
  } else {
    checkBool[2].style.backgroundColor = 'red';
    validationCheck[2] = false;
    return complateValidation(validationCheck);
  }
}

function checkEmail(e){
  const emailInfo = e.target.value

  console.log(emailInfo.split('@')[0].length);

  const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if(emailInfo.split('@').length === 2){
    if(emailInfo.endsWith('.com') || emailInfo.endsWith('.net') || emailInfo.endsWith('.co.kr')){
      if(emailInfo.split('@')[0].length > 4 && emailInfo.split('@')[0].length < 20){
        if(checkEmail.test(emailInfo)){
          checkBool[3].style.backgroundColor = 'green';
          validationCheck[3] = true;
          return complateValidation(validationCheck);
        } else {
          console.log(1);
          checkBool[3].style.backgroundColor = 'red';
          validationCheck[3] = false;
          return complateValidation(validationCheck);
        }
      } else {
        console.log(2);
        checkBool[3].style.backgroundColor = 'red';
        validationCheck[3] = false;
        return complateValidation(validationCheck);
      }
    } else {
      console.log(3);
      checkBool[3].style.backgroundColor = 'red';
      validationCheck[3] = false;
      return complateValidation(validationCheck);
    }
  } else {
    console.log(4);
    checkBool[3].style.backgroundColor = 'red';
    validationCheck[3] = false;
    return complateValidation(validationCheck);
  }
}


function checkPhone(e){
  if(e.target.value.length === 13){
    if(e.target.value.startsWith('010')){
      if(!isNaN(e.target.value.split('-')[1]) && !isNaN(e.target.value.split('-')[2])){
        if(e.target.value.indexOf('-') === 3 && e.target.value.lastIndexOf('-') === 8){
          let lastNum = e.target.value.split('-');
          passwordNum = lastNum[2];
          checkBool[4].style.backgroundColor = 'green';
          checkPassword();
          validationCheck[4] = true;
          return complateValidation(validationCheck);
        } else{
          checkBool[4].style.backgroundColor = 'red';
          passwordNum = '';
          checkPassword();
          validationCheck[4] = false;
          return complateValidation(validationCheck);
        }
      } else {
        checkBool[4].style.backgroundColor = 'red';
        passwordNum = '';
        checkPassword();
        validationCheck[4] = false;
        return complateValidation(validationCheck);
      }
    } else {
      checkBool[4].style.backgroundColor = 'red';
      passwordNum = '';
      checkPassword();
      validationCheck[4] = false;
      return complateValidation(validationCheck);
    }
  } else{
    checkBool[4].style.backgroundColor = 'red';
    passwordNum = '';
    checkPassword();
    validationCheck[4] = false;
    return complateValidation(validationCheck);
  }
}

function finalSubmit(){
  let btn = document.createElement('button');
  btn.textContent = "모든 입력란이 유효합니다.";
  btn.style.color = 'black';
  btn.style.backgroundColor = '#4AFF51';
  btn.style.border = 'none';
  btn.style.width = '100%';
  btn.style.height = '100%';
  btn.style.cursor = 'pointer';
  btn.setAttribute("type", "submit");
  submit.textContent = '';
  submit.appendChild(btn);
}

function complateValidation(array){
  for(let i =0; i < array.length; i ++){
    if(array[i] === false){
      submit.textContent = '아직 모든 입력란이 유효하지 않습니다.'
    } 
  } 
  if(validationCheck.every(item => item === true)){
    finalSubmit()
  }
}

name.addEventListener('change', checkMyName);

phoneNum.addEventListener('change', checkPhone);

password.addEventListener('change', checkPassword);

checkPass.addEventListener('change', checkPasswordCheck);

email.addEventListener('change', checkEmail)