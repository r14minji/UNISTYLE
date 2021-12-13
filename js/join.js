const form = document.querySelector("#member");
const submitBtn = form.querySelector("input[type=submit]");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if(!isTxt("fisrtName", 1, "First Name")) e.preventDefault();
  // if(!isTxt("lastName", 1, "Last Name")) e.preventDefault();
  // if(!isTxt("userid", 6, "ID using 6 or more characters")) e.preventDefault();
  if(!isPwd("pwd1", "pwd2", 8)) e.preventDefault();
})

//text input 인증 함수 
function isTxt(name, len, comment){
  
  if(len == undefined) len = 1;

  let input = form.querySelector(`[name=${name}]`);
  console.log(input);
  let txt = input.value;
  console.log(txt);

  if((txt.length >= len && txt !="")){
    const errMsgs = form.querySelectorAll("p");
    if(errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    return true;
  }else{
    const errMsgs = form.querySelectorAll("p");
    if(errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`Please enter your ${comment}`);
    input.closest("td").append(errMsg);
    return false;
  }
}

//password 인증함수
function isPwd(name1, name2, len){
  const pwd1 = form.querySelector(`[name=${name1}]`);
  const pwd2 = form.querySelector(`[name=${name2}]`);
  const pwd1_value = pwd1.value;
  const pwd2_value = pwd2.value;

  const upperLetter = /[A-Z]/;
  const lowerLetter = /[a-z]/;
  const num = /[0-9]/;

  if(pwd1_value === pwd2_value && pwd1_value.length >= len && upperLetter.test(pwd1_value) && lowerLetter.test(pwd1_value) && num.test(pwd1_value)){
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();
    
    return true;
  }else{
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
      errMsg.append(`Please use ${len} or more characters, with at least 1 number and a mixture of uppercase and lowercase letters`);
      pwd1.closest("td").append(errMsg);
      
      return false;
  }
}