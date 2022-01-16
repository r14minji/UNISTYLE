const teams = document.querySelector(".team .wrap");
const steps = document.querySelector(".howWeWork .step ul");
const differences = document.querySelector(".different .wrap");


callData();

//api 데이터 불러오기
function callData(){
  const url = "/dbs/aboutus.json";

  fetch(url)
  .then(data =>{
    return data.json();
  })
  .then(json =>{
    //console.log(json);
    let items = json.about;
    let works = json.work;
    let icons = json.different;

    createMembers(items);
    createSteps(works);
    createDifference(icons);
  })
}

function createMembers(items){
  let teamMemebers = "";
  items.forEach(item =>{
    teamMemebers += `
    <article>
      <div class="pic">
        <img src="${item.imgSrc}" alt="${item.name}의 프로필 사진입니다.">
      </div>
      <div class="memberInfo">
        <strong>${item.name}</strong>
        <p>${item.position}</p>
        <span>${item.email}</span>
      </div>
    </article>
    `
  })
  teams.innerHTML = teamMemebers;
}

function createSteps(works){
  let step = "";
  works.forEach((work, index) =>{
    step += `
    <li>
    <strong>0${index +1}</strong>
    <p>${work.title}</p>
    <span>${work.contents}</span>
  </li>
    `
  })
  steps.innerHTML = step;
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
  differences.innerHTML = contents;
}