//api 데이터 불러오기
function callData(){
  const url = "./dbs/community.json";

  fetch(url)
  .then(data =>{
    console.log(data)
    return data.json();
  })
  .then(json =>{
    console.log(json)
  })
}

//tab
const tab = document.querySelector("#tab_community");
const btns = tab.querySelectorAll("ul li");
const boxs = tab.querySelectorAll(".wrap >div");
const btns_a = document.querySelectorAll("dt>a");

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
const boardFAQ = document.querySelector("#faq");
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
