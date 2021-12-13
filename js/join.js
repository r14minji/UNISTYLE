const form = document.querySelector("#member");
const submitBtn = form.querySelector("input[type=submit]");

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if(!isTxt("fisrtName", 1, "First Name")) e.preventDefault();
  if(!isTxt("lastName", 1, "Last Name")) e.preventDefault();
  if(!isTxt("userid", 6, "ID using 6 or more characters")) e.preventDefault();

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
function isPwd(){
  const pwd1 = form.querySelector(`[name=${"pwd1"}]`)
}