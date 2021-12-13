const form = document.querySelector("#member");
const submitBtn = form.querySelector("input[type=submit]");

submitBtn.addEventListener("click", e => {
  if(!isTxt("fisrtName", 1, "First Name")) e.preventDefault();
  if(!isTxt("lastName", 1, "Last Name")) e.preventDefault();
  if(!isTxt("userid", 6, "ID using 6 or more characters")) e.preventDefault();
  if(!isPwd("pwd1", "pwd2", 8)) e.preventDefault();
  //if(!isEmail("email", 5)) e.preventDefault();
})

//text input 인증 함수 
function isTxt(name, len, comment){
  
  if(len == undefined) len = 1;

  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  if((txt.length >= len && txt !="")){
    const errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    return true;
  }else{
    const errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

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

//email  인증함수
function isEmail(name, len){
  const input = form.querySelector(`[name=${name}]`);
  const input_value = input.value;

  if(input_value >= len && /@/.test(input_value)){
    const errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    return true
  }else{
    const errMsgs = input.closest("td").querySelectorAll("p");
    if(errMsgs.length > 0 )  input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`The email address is invalid. Please use ${len} or more characters, with @`);
    input.closest("td").append(errMsg);

    return false
  }
}

//년월일 select 
const start_year="1950";// 시작할 년도 
const today = new Date(); 
const today_year= today.getFullYear(); 
let index=1; //0번은 html에서 지정함

for(let y=start_year; y<=today_year; y++){ //start_year ~ 현재 년도 
  document.getElementById('select_year').options[index] = new Option(y, y); 
  index++; 
} 

index=1; 
for(let m=1; m<=12; m++){ 
  document.getElementById('select_month').options[index] = new Option(m, m); index++; 
} 

index=1; 
for(let m=1; m<=31; m++){ 
  document.getElementById('select_day').options[index] = new Option(m, m); index++; 
} 


/* 
//윤달에 따라 날자 변경
lastday(); 
function lastday(){ //년과 월에 따라 마지막 일 구하기 
  const Year=document.getElementById('select_year').value; 
  const Month=document.getElementById('select_month').value;
  const day=new Date(new Date(Year,Month,1)-86400000).getDate(); // = new Date(new Date(Year,Month,0)).getDate();
  
  const dayindex_len=document.getElementById('select_day').length ; 
  
  if(day>dayindex_len){ 
    for(let i=(dayindex_len +1 ); i<=day; i++){ 
      document.getElementById('select_day').options[i-1] = new Option(i, i); 
    } 
  } else 
  if(day<dayindex_len){ 
    for(let i=dayindex_len; i>=day; i--){ 
      document.getElementById('select_day').options[i]=null; 
    } 
  } 
}
*/