const sectionValue = document.querySelector(".value");
const btns = sectionValue.querySelectorAll("ul li");
const boxs = sectionValue.querySelectorAll(".content>div");
let enableClick = true;
const delay = convertSpeed(boxs[0]);

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