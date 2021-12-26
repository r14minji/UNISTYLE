// Get in touch form mail 연동
(function() {
  emailjs.init("user_0jmOb2petG8ctjrd0EFUg");
  })();
  
window.onload = function(){
  const form = document.getElementById("getInTouch-form");

  // 고유 contact 숫자 랜덤하게 생성
  form.addEventListener("submit", function(e){
    e.preventDefault();

    this.contact_number.value = Math.random() * 100000 | 0;

    emailjs
    .sendForm('service_rp4orry', 'template_xmup6ld', this)
    .then(
      function(response){
        console.log('메일 인증 성공', response.state, response.text);
        alert("문의 내용이 전송되었습니다.");
        form.reset();
      },
      function(error){
        console.log('메일 발송 실패', error);
        alert("메일 발송에 실패했습니다.");
      }
    )
  })
}


//input에 value값이 있을 경우
const form = document.querySelector("#getInTouch-form");
const inputs = form.querySelectorAll("[type=text]");
// inputs.forEach(el =>{
//   let txt = el.value;
//   console.log(txt);

// })
const firstName = form.querySelector("#to_first_name");