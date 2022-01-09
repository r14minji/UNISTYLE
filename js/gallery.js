const body = document.querySelector("body");
const section = document.querySelector(".galleryContents");
const input = document.getElementById("search");
const btn = document.querySelector(".btnSearch");
const loading = document.querySelector(".loading");
const list = document.querySelector("#photoList");
const errMsg = document.querySelector(".errMsg");
const h1 = document.querySelector(".gallery .inner h1");



this.url4 =`${this.base}method=${this.method5}&api_key=${this.key}&per_page=${this.per_page}&format=json&nojsoncallback=1&gallery_id=${this.galleryname}`;


//api 연결
const api_key = "e876201effa30e353ec16d8c4b313899";
const method1 = "flickr.people.getPhotos";
const user_id = "194311789@N07";
const method2 = "flickr.photos.search";
const per_page = 17;
const format = "json";

const url1 = `https://www.flickr.com/services/rest/?method=${method1}&api_key=${api_key}&user_id=${user_id}&per_page=${per_page}&format=${format}&nojsoncallback=1`;


callData(url1);
window.onload = callData(url1);

//h1클릭시 처음 데이터 보여주기
h1.addEventListener("click", e=>{
  callData(url1);
})

// 검색어로 이미지 찾기
btn.addEventListener("click", e=>{
  let tag = input.value;
  const url2 = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${api_key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}`;
  //console.log(tag);
  
  if(tag != ''){
    callData(url2);
    errMsg.style.display = "none";
  }else{
    errMsg.innerText = "검색어를 입력하세요.";
    errMsg.style.display = "block";
    list.classList.remove("on");
  }
})

//엔터로 검색하기
input.addEventListener("keyup", e =>{
  if(e.key == "Enter"){
    let tag = input.value;
    const url2 = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${api_key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}`;
    //console.log(tag);
    
    if(tag != ''){
      callData(url2);
      errMsg.style.display = "none";
    }else{
      errMsg.innerText = "검색어를 입력하세요";
      errMsg.style.display = "block";
      list.classList.remove("on");
    }
  }
})

//이미지 팝업창으로 보기
list.addEventListener("click", e => {
  e.preventDefault(); //  반드시 필요함. 넣어야 aside에 사진들어감.

  if(e.target == list) return

  let target = e.target.closest(".item").querySelector(".viewMore");
  //console.log(target);

  if(e.target == target){
    const imgSrc = target.getAttribute("href");
    const pop = document.createElement("aside");
    pop.classList.add("popup_gallery");

    let pops  = `
    <div class="con">
      <img src="${imgSrc}">
    </div>
    <span>close</span>
    `
    pop.innerHTML = pops;
    section.append(pop);
    body.style.overflow = 'hidden';
  }
})


//팝업창 닫기
section.addEventListener("click", e =>{
  e.preventDefault();
  //console.log(e.target);
  let popup = e.currentTarget.querySelector("aside");

  if(popup != null){
    const btnClose = popup.querySelector("span");
    if(e.target == btnClose){
      popup.remove();
      body.style.overflow = 'auto';
    }
  }
})


//앨범 데이터 불러오기
function callData(url){
  loading.classList.remove("off");
  list.classList.remove("on");

  fetch(url)
  .then(data =>{
    return data.json();
  })
  .then(json =>{
    let items = json.photos.photo;
    //console.log(json);

    if(items.length > 0){
      createList(items);
      delayLoading();

    }else{
      loading.classList.add("off");
      errMsg.innerText = "검색하신 이미지의 데이터가 없습니다.";
      errMsg.style.display = "block";
    }
    
  })
}


//데이터 화면에 그리기
function createList(items){
  let htmls = "";
  items.forEach( item => {
    let title = item.title;
    if(title.length >17){
      title = title.substr(0,17);
    }

    htmls += `
    <li class="item">
      <figure>
        <img src="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg" class="thumb" >
        <figcaption>
          <p>${title}</p>
          <span>${item.owner}</span>
          <a href="https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg" class="viewMore">VIEW MORE</a>
        </figcaption>
      </figure>
    </li>
    `
  });
  list.innerHTML = htmls;
}


//로드 중 오류수정
function delayLoading(){
  const imgs = list.querySelectorAll("img");
  let count = 0;
  for(let el of imgs){
    el.onload = () =>{ 
      count ++; 
    
      if(count === imgs.length) isoLayout();
    }

    const thumb = el.closest(".item").querySelector(".thumb");
    thumb.onerror  = e => {
      e.currentTarget.closest(".item").querySelector(".thumb").setAttribute("src", "k1.jpg")
    }
  };
}


//isotope 레이아웃
function isoLayout(){
  loading.classList.add("off");
  list.classList.add("on");

  new Isotope("#photoList", {
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  })
}