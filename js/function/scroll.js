const sections = document.querySelectorAll(".myScroll");
const len = sections.length;
const lis = document.querySelectorAll(".btns li");
const speed = 500;
const btns_arr = Array.from(lis);
let posArr = [];
const baseLine = -200;
let enableClick = true;

setPos();


//브라우저가 리사이즈 되었을 때
window.addEventListener("resize", ()=> {
  setPos();
  let activeItem = document.querySelector(".btns li.on");
  let activeIndex = btns_arr.indexOf(activeItem);

  window.scroll(0, posArr[activeIndex]);
})


//브라우저 스크롤시
window.addEventListener("scroll", e => {
  let scroll = window.scrollY || window.pageYOffset;
  
  sections.forEach((el, index) => {
    if(scroll >= posArr[index] + baseLine){
      lis.forEach((el, index)=>{
        el.classList.remove("on");
        //sections[index].classList.remove("scroll");
      })
      lis[index].classList.add("on");
      //sections[index].classList.add("scroll");
    }
  })
});

lis.forEach((el, index)=> {
  el.addEventListener("click", e => {
    let isOn = e.currentTarget.classList.contains("on");
    if(isOn) return;

    if(enableClick){
      enableClick = false;
      new Anime(window, {
        prop: "scroll",
        value: posArr[index],
        duration: speed,
        callback: () => {
          enableClick = true;
        }
      })
    }
  })
})

function setPos(){
  posArr = [];
  for(let el of sections){
    posArr.push(el.offsetTop);
  }
}