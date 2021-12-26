const body = document.querySelector("body");
const vidList = document.querySelector(".vidList");
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
    if(title.length >32) {
      title = title.substr(0,32) + '...';
    }

    let con = item.snippet.description;
    if(con.length > 80){
      con =  con.substr(0, 80);
    }

    let date = item.snippet.publishedAt;
    date = date.split("T")[0];

    count = count++; 

    result += `
    <article>
      <strong>${++count}</strong>
      <h2>${title}</h2>
      <p>${con}</p>
      <span>${date}</span>
      <a href="${item.snippet.resourceId.videoId}" class="pic">
        <img src="${item.snippet.thumbnails.medium.url}">
      </a>
      <ul>
        <li><i class="fas fa-download"></i></li>
        <li><i class="fas fa-heart"></i></li>
        <li><i class="fas fa-share"></i></li>
        <li><i class="fas fa-ellipsis-h"></i></li>
      </ul>
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
  const title = e.target.closest("article").querySelector("h2").innerText;  
  const des = e.target.closest("article").querySelector("p").innerText;  
  
  const pop = document.createElement("aside");
  pop.classList.add("popup_youtube");
  
  body.style.overflow = "hidden";

  pop.innerHTML = `
  <div class="inner">
    <div class="con">
      <strong>${count}</strong>
      <h1>${title}</h1>
      <p>${des}</p>
    </div>
    <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" height="100%" allowfullscreen ></iframe>
    <span>Close</span>
  </div>
  `;

  body.append(pop);
})


//팝업 닫기
body.addEventListener("click", e=> {
  const pop = e.currentTarget.querySelector("aside");

  if(pop != null) {
    const close = pop.querySelector("span");
    if(e.target == close){
      pop.remove();
      body.style.overflow = "visible";
    }
  }
})