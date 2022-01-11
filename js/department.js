const sectionValue = document.querySelector(".value");
const btns = sectionValue.querySelectorAll("ul li");
const boxs = sectionValue.querySelectorAll(".content>div");
const members = document.querySelector(".members .inner .wrap");
let enableClick = true;
const delay = convertSpeed(boxs[0]);

callData();

btns.forEach((el, index)=> {
  el.addEventListener("click", e => {
    e.preventDefault();

    let isOn = e.currentTarget.classList.contains("on");
    if(isOn) return;
    if(enableClick){
      activation(btns, index);
      activation(boxs, index);
      enableClick = false;
    }
  })
})

function activation(arr, index){
  for(let el of arr){
    el.classList.remove("on");
  }
  arr[index].classList.add("on");

  setTimeout(function(){
    enableClick = true;
  }, delay);
}

function convertSpeed(item){
  let speed = getComputedStyle(item).transitionDuration;
  speed = speed.split(",")[0];
  speed = parseInt(speed) * 1000;
  return speed;
} 


//api 데이터 불러오기
function callData(){
  const url = "../js/dbs/member.json";

  fetch(url)
  .then(data =>{
    return data.json();
  })
  .then(json =>{
    console.log(json);
    let items = json.members;

    createMembers(items);
  })
}

function createMembers(items){
  let teams = "";
  items.forEach(item =>{
    teams += `
      <div class="profile">
        <div class="person">
          <img src="${item.imgSrc}" alt="${item.name}">
        </div>
        <div class="txtWrap">
          <div class="txt">
            <h2>${item.name}</h2>
            <p>${item.position}</p>
            <strong><a href="#">${item.phoneNum}</a></strong>
            <span><a href="#">${item.email}</a></span>
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></a></i></li>
              <li><a href="#"><i class="fab fa-instagram"></a></i></li>
            </ul>
          </div>
        </div>
      </div>
    `
  })
  members.innerHTML = teams;
}