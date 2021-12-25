const vidList = document.querySelector("#youtubeVidList");
const key = "AIzaSyCB33AAQUtZKdJsxck78NerCW1I2nv_yYo";
const playListId = "PL5jd_nA7BbYsJhoye24NUYMlS6eUq1v1a";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResult=${num}`;

fetch(url)
.then(data => {
  return data.json();
})
.then(json => {
  //console.log(json.items);
  let items = json.items;

  let result = "";
  items.forEach(item =>{
    let title = item.snippet.title;

    let con = item.snippet.description;

    let date = item.snippet.publishedAt;
    date = date.split("T")[0];

    let count = 0;

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