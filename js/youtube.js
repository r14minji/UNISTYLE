const body = document.querySelector("body");
const vidList = document.querySelector("#vidList .wrap");
const key = "AIzaSyB3Xi97H8RT0bj6sAR6FQRG1TB8ts5Br7k";
const playListId = "PL5jd_nA7BbYsJhoye24NUYMlS6eUq1v1a";
const num = 8;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResult=${num}`;


fetch(url)
.then(data => {
  return data.json();
})
.then(json => {
  console.log(json.items);
  let items = json.items;

  let result = "";
  let count = 0;

  items.forEach(item =>{
    let title = item.snippet.title;

    let con = item.snippet.description;
    if(con.length > 350){
      con =  con.substr(0, 350);
    }

    let date = item.snippet.publishedAt;
    date = date.split("T")[0];

    count = count++; 

    result += `
    <article>
      <h1>${title}</h1>
      <div class="txt">
        <strong>0${++count}</strong>
        <p>${con}</p>
        <span>${date}</span>
      </div>
      <div class="pic">
        <a href="${item.snippet.resourceId.videoId}" class="pic">
          <img src="${item.snippet.thumbnails.medium.url}">
        </a>
      </div>
    </article>
    `
  })
  vidList.innerHTML = result;
})


//팝업생성
vidList.addEventListener("click", e => {
  e.preventDefault();

  if(e.target.closest("a") == null) return;
  const vidId = e.target.closest("a").getAttribute("href");
  const count = e.target.closest("article").querySelector("strong").innerText;  
  const title = e.target.closest("article").querySelector("h1").innerText;  
  const des = e.target.closest("article").querySelector("p").innerText;  
  
  const pop = document.createElement("aside");
  pop.classList.add("popup_youtube");
  
  body.style.overflow = "hidden";

  pop.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
    <span><i class="far fa-window-close"></i></span>
  `;

  body.append(pop);
})


//팝업 닫기
body.addEventListener("click", e=> {
  const pop = e.currentTarget.querySelector("aside");
  console.log(pop)

  if(pop != null) {
    const close = pop.querySelector("span");
    console.log(e.target)

    if(e.target.parentNode == close){
      pop.remove();
      body.style.overflow = "visible";
    }
  }
})