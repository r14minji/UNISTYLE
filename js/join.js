const form = document.querySelector("#member");
const submitBtn = form.querySelector("input[type=submit]");

submitBtn.addEventListener("click", e => {

})

function isTxt(name, len){
  
  if(len == undefined) len = 5;

  let input = form.querySelector("input[type=text]");
  let txt = input.value;

  if( txt.length != '' && txt.length >= len){

  }else{
    const errMsgs = input.closest("td")

    const errMsg = document.createElement("p");
    errMsg.append(`Please enter a valid ${} (more then ${len})`)
  }
}