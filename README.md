# 📽 NETFLIX 홈페이지 따라 만들어 보기

## 완성한 홈페이지 모습

---

### tv이미지에 동영상 삽입하기
```css
.tv .content-tv {
  position: relative;
}
.tv .content-tv .image-tv {
  position: relative;
  z-index: 2;
}
.tv .content-tv .image-tv img {
  width: 530px;
  height: 398px;
}
.tv .content-tv .tv-video {
  width: 387px;
  height: 216px;
  position: absolute;
  top:80px;
  left: 68px;
}
```
<br/>

### 자주 묻는 질문 버튼효과 만들기
```css
.QA .qa-list .text {
  width: 815px;
  padding: 31.2px;
  box-sizing: border-box;
  font-size: 26px;
  background-color: #303030;
  display: none;
}
.qa-list .text.open {
  display: block;
}
```
```js
let textArray = document.querySelectorAll('.qa-list .text');
let btnArray = document.querySelectorAll('.qa-list button');
document.querySelectorAll('.qa-list button').forEach(function (i) {
  i.addEventListener('click', function(e){
    const clickedBtnIndex = [...btnArray].indexOf(e.target);
    textArray[clickedBtnIndex].classList.toggle('open');
  })
});
```