//tab
const tab = document.querySelector("section");
const btns = tab.querySelectorAll(".tabButton li");
const boxs = tab.querySelectorAll(".wrap >article");
const btns_a = document.querySelectorAll(".tabButton li a");

btns.forEach((el, index) =>{
  el.addEventListener("click", e => {
    e.preventDefault();
    let isOn = e.currentTarget.classList.contains("on");
    if(isOn) return;
    activationTab(btns, index);
    activationTab(boxs, index);
  })
})

btns_a.forEach((el, index) => {
  el.addEventListener("focusin", e => {
    activationTab(btns, index);
    activationTab(boxs, index);
  })
})

function activationTab(items, index){
  for(let item of items){
    item.classList.remove("on");
  }
  items[index].classList.add("on");
}

//accordion
const board = document.querySelector("#faq");
const h2 = board.querySelectorAll(".accordionTitle");
const accIcon = document.querySelectorAll(".accIcon");

h2.forEach((el)=>{
  el.addEventListener("click", e =>{
    let targetText = e.currentTarget.nextElementSibling.classList;
    let targetAccIcon = e.currentTarget.children[1]; 
    //let target = e.currentTarget;

    if(targetText.contains("show")){
      targetText.remove("show");
      targetAccIcon.classList.remove("anime");
    }
    else{    
      for(let btn of h2){
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
