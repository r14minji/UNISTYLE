const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const gnb_lis = document.querySelectorAll(".gnbWrap ul>li")
const sections = document.querySelectorAll("section");
const len = sections.length;
const lis = document.querySelectorAll(".btns li");
const swiper_check = document.querySelector(".mySwiper");
const speed = 500;
const btns_arr = Array.from(lis);
let posArr = [];
const baseLine= -700;

setPos();

//반응형 메뉴버튼
btnCall.addEventListener("click", e =>{
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
})


//2depth 
gnb_lis.forEach( li=>{
  li.addEventListener("mouseenter", e=>{
    const sub = e.currentTarget.querySelector(".sub");
    if(sub !=null){
      sub.style.display = "block";
    }

    const depth1 = e.currentTarget.querySelector("a");
    depth1.classList.add("on");
  })

  li.addEventListener("mouseleave", e=>{
    const sub = e.currentTarget.querySelector(".sub");
    if(sub !=null){
      sub.style.display = "none";
    }

    const depth1 = e.currentTarget.querySelector("a");
    depth1.classList.remove("on");
  })

  li.addEventListener("focusin", e=>{
    const sub = e.currentTarget.querySelector(".sub");
    if(sub !=null){
      sub.style.display = "block";
    }
  })

  const sub = li.querySelector(".sub ul");
  if(sub != null) {
    const lastEl = sub.lastElementChild;
    lastEl.addEventListener("focusout", e => {
      e.currentTarget.closest(".sub").style.display = "none";
    })
  }
})

  //스와이퍼 연결
if(swiper_check !== null){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}



//스크롤 모션
window.addEventListener("scroll", e =>{
  let scroll = window.scrollY || window.pageYOffset;

  sections.forEach((el, index)=>{
    el.classList.remove("on");
    if(scroll >= posArr[index] + baseLine ){
      sections[index].classList.add("on");
    } 
  })
})

function setPos(){
  posArr = [];
  for(let el of sections){
    posArr.push(el.offsetTop);
  }
}