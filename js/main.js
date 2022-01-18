const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const gnb_lis = document.querySelectorAll(".gnbWrap ul>li");
const story_check = document.querySelector(".myStory");
const theViews_check = document.querySelector(".cards");


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
if(story_check !== null){
  const storySwiper = new Swiper(".myStory", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: { 
      540: { 
        slidesPerView:2, 
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });
};

if(theViews_check !== null){
  const theViewsSwiper = new Swiper(".cards", {
    effect: "cards",
    grabCursor: true,
  });
}
