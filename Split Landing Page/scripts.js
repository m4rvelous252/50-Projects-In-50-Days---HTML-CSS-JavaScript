const container = document.querySelector('.container');
const split = document.querySelectorAll('.split');

function onHover(e){
  if (e.target.classList.contains('right')) {
    container.classList.add('hover-right');
  }
  if (e.target.classList.contains('left')) {
    container.classList.add('hover-left');
  }
}

function onLeave(e){
  container.classList.remove('hover-left');
  container.classList.remove('hover-right');
}

split.forEach(split => {
  split.addEventListener('mouseover', onHover);
  split.addEventListener('mouseleave', onLeave);
})