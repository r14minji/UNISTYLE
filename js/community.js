
//accordion
const boardFAQ = document.querySelector("#FAQ");
const accordionBtn = boardFAQ.querySelectorAll(".accordionTitle");
const allTexts = boardFAQ.querySelectorAll(".text");
const accIcon = document.querySelectorAll(".accIcon");

accordionBtn.forEach((el)=>{
  el.addEventListener("click", e =>{
    let targetText = e.currentTarget.nextElementSibling.classList;
    let targetAccIcon = e.currentTarget.children[1]; 
    //let target = e.currentTarget;

    if(targetText.contains("show")){
      targetText.remove("show");
      targetAccIcon.classList.remove("anime");
    }
    else{    
      for(let btn of accordionBtn){
        btn.classList.remove("show");
      }
      targetText.add("show");
      for(let icon of accIcon){
        icon.classList.remove("anime");
      }
      targetAccIcon.classList.add("anime");
    }
  })
})
