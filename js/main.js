const different = document.querySelector(".different .wrap");
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const gnb_lis = document.querySelectorAll(".gnbWrap ul>li");
const sections = document.querySelectorAll("section");
const len = sections.length;
const lis = document.querySelectorAll(".btns li");
const story_check = document.querySelector(".myStory");
const theViews_check = document.querySelector(".cards");
const speed = 500;
const btns_arr = Array.from(lis);
let posArr = [];
const baseLine= -400;

//setPos();
callData();

//api 데이터 불러오기
function callData(){
  const url = "./js/dbs/aboutus.json";

  fetch(url)
  .then(data =>{
    return data.json();
  })
  .then(json =>{
    console.log(json);
    let icons = json.different;
    createDifference(icons);
  })
}

function createDifference(icons){
  let contents = "";
  icons.forEach( icon =>{
    contents += `
    <article>
      <div class="pic">
        <img src="${icon.imgSrc}" alt="${icon.title}을 상징으로 표현한  ${icon.alt}이미지 입니다.">
      </div>
      <h1>${icon.title}</h1>
      <p>${icon.description}</p>
    </article>
    `
  })
  different.innerHTML = contents;
}

//스크롤 모션
// window.addEventListener("scroll", e =>{
//   let scroll = window.scrollY || window.pageYOffset;

//   sections.forEach((el, index)=>{
//     el.classList.remove("on");
//     if(scroll >= posArr[index] + baseLine ){
//       sections[index].classList.add("on");
//     } 
//   })
// })

// function setPos(){
//   posArr = [];
//   for(let el of sections){
//     posArr.push(el.offsetTop);
//   }
// }


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
      240:{
        slidesPerView: 1,
      },
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
