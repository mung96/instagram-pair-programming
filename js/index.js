// 이미지 슬라이드
let imgIndex=[0,0,0];
let position = [0,0,0];
let check=[false,false,false];
const IMG_WIDTH = 470;
const btnPrev = document.querySelectorAll(".btn-prev");
const btnNext = document.querySelectorAll(".btn-next");
const slideImgs = document.querySelectorAll(".postcard_slide");
const hearts=document.querySelectorAll(".postcard_bottom_icon_heart");

function prev (i) {
  if (imgIndex[i] > 0) {
    btnNext[i].removeAttribute("disabled");
    position[i] += IMG_WIDTH;
    slideImgs[i].style.transform = `translateX(${position[i]}px)`;
    imgIndex[i] = imgIndex[i] - 1;
  }
  if (imgIndex[i] == 0) {
    btnPrev[i].setAttribute("disabled", "true");
  } 
};

function next (i) { 
  if (imgIndex[i] < 3) {
    btnPrev[i].removeAttribute("disabled");
    position[i] -= IMG_WIDTH;
    slideImgs[i].style.transform = `translateX(${position[i]}px)`;
    slideImgs[i].style.transition = "transform .5s ease-out";
    imgIndex[i] = imgIndex[i] + 1;
  }
  if (imgIndex[i] == 2) {
    btnNext[i].setAttribute("disabled", "true");
} 
};

function init () {
  for(let i=0;i<3;i++){
    btnPrev[i].setAttribute("disabled", "true");
    btnPrev[i].addEventListener("click", ()=>prev(i));
    btnNext[i].addEventListener("click", ()=>next(i));
    hearts[i].addEventListener("click",()=>heartClickHandler(i))
  }
};

init();
function heartClickHandler(i){
  if(!check[i]){
    hearts[i].src="img/icon_RedHeart.png";
    check[i]=true;
  }
  else{
    hearts[i].src="img/icon_Heart.svg";
    check[i]=false;
  }

}
