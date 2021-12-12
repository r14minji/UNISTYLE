//tab
const tab = document.querySelector("#tab_community");
const dts = tab.querySelectorAll("dt");
const dds = tab.querySelectorAll("dd");
const dt_btn = document.querySelectorAll("dt>a");

dts.forEach((el, index) =>{
  el.addEventListener("click", e => {
    e.preventDefault();
    let isOn = e.currentTarget.classList.contains("on");
    if(isOn) return;
    activationTab(dts, index);
    activationTab(dds, index);
  })
})

dt_btn.forEach((el, index) => {
  el.addEventListener("focusin", e => {
    activation(dts, index);
    activation(dds, index);
  })
})

function activationTab(items, index){
  for(let item of items){
    item.classList.remove("on");
  }
  items[index].classList.add("on");
}

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
