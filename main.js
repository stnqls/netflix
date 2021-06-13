/*
const textBtn = document.querySelector('.qa-list li ~ li');
const text = document.querySelector('.qa-list .text');

textBtn.addEventListener('click',function() {
  text.classList.toggle('open')
})  
*/

let textArray = document.querySelectorAll('.qa-list .text');
let btnArray = document.querySelectorAll('.qa-list button');
document.querySelectorAll('.qa-list button').forEach(function (i) {
  i.addEventListener('click', function(e){
    const clickedBtnIndex = [...btnArray].indexOf(e.target);
    textArray[clickedBtnIndex].classList.toggle('open');
  })
});