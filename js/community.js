const firstBoard = document.querySelector(".accordion ul");
const secondBoard = document.querySelector("#notice tbody");
const thirdBoard = document.querySelector("#review .wrap");

callData();
//api 데이터 불러오기
function callData(){
  const url = "/dbs/community.json";

  fetch(url)
  .then(data =>{
    return data.json();
  })
  .then(json =>{
    console.log(json)
    let itemsFAQ = json.FAQ;
    let itemsNotice = json.notice;
    let itemsReview = json.review;

    createFaq(itemsFAQ);
    createNotice(itemsNotice);
    createReview(itemsReview);
  })
}

function createFaq(items){
  let board = "";
  items.forEach(item =>{
    board += `
    <li class="item">
      <h2 class="accordionTitle">
        <strong>${item.topic}</strong>
        ${item.title}
        <span class="accIcon"></span>
      </h2>
      <div class="text">${item.answer}</div>
    </li>
    `
  })
  firstBoard.innerHTML = board;
}

function createNotice(items){
  let board = "";
  items.slice(0).reverse().forEach((item, index) =>{
    board += `
    <tr>
      <td>${items.length - index}</td>
      <td><a href="#">${item.title}</a></td>
      <td>${item.id}</td>
      <td>${item.date}</td>
    </tr>
    `
  })
  secondBoard.innerHTML = board;
}

function createReview(items){
  let board = "";
  items.slice(0).reverse().forEach((item, index) =>{
    board += `
    <div class="list">
      <div class="writerInfo">
        <div class="userIcon">
          <img src="${item.userIconSrc}">
        </div>
        <p>${item.userId}</p>
      </div>
      <div class="photo">
        <img src="${item.photoSrc}" >
      </div>
      <div class="contents">
        <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
        <strong>${item.date}</strong>
        <p>${item.description}</p>
        <!-- <div class="plus">더보기</div> -->
      </div>
    </div>
    `
  })
  thirdBoard.innerHTML = board
}


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
const board = document.querySelector(".accordion ul");

board.addEventListener("click", e=>{
  const h2 = e.target.closest(".item").querySelector(".accordionTitle");
  const accIcons = e.currentTarget.querySelectorAll(".anime");
  let targetText = h2.nextElementSibling.classList;
  let targetAccIcon = h2.children[1]; 

  if(targetText.contains("show")){
    targetText.remove("show");
    targetAccIcon.classList.remove("anime");
  }
  else{
    for(el of accIcons){
      el.classList.remove("anime");
    }
    targetAccIcon.classList.add("anime");
    targetText.add("show");
  }
})


