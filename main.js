/*
const textBtn = document.querySelector('.qa-list li ~ li');
const text = document.querySelector('.qa-list .text');

textBtn.addEventListener('click',function() {
  text.classList.toggle('open')
})  
*/

// let textArray = document.querySelectorAll('.qa-list .text');
// let btnArray = document.querySelectorAll('.qa-list button');
// document.querySelectorAll('.qa-list button').forEach(function (i) {
//   i.addEventListener('click', function(e){
//     const clickedBtnIndex = [...btnArray].indexOf(e.target);
//     textArray[clickedBtnIndex].classList.toggle('open');
//   })
// });

let textArray = document.querySelectorAll('.qa-list .text');
let btnArray = document.querySelectorAll('.qa-list button');
btnArray.forEach((btn) => {
  btn.addEventListener('click', e => {
    const clickedBtnIndex = [...btnArray].indexOf(e.target);
    textArray[clickedBtnIndex].classList.toggle('open');
  })
});
 
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, //보여짐 여부를 감시할 요소를 설정
      triggerHook : .8 

    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
