const container = document.querySelector('.container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlide = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight;
  if(direction === 'up'){
    activeSlide++;
    if(activeSlide > slideLength - 1){
      activeSlide = 0;
    }
  } else if(direction === 'down'){
    activeSlide--;
    if(activeSlide < 0){
      activeSlide = slideLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
}