const panels = document.querySelectorAll('.panel')

const onPanelClick = (e) => {
  if(e.target.classList.contains('active')){
    return
  }else{
    let foundCurActive = false;
    let index = 0
    while(!foundCurActive){
      if(panels[index].classList.contains('active')){
        panels[index].classList.remove('active')
        foundCurActive = true
      }else{
        index++
      }
    }
    e.target.classList.add('active')
  }
  e.preventDefault()
}

panels.forEach(panel => {
  panel.addEventListener('click', onPanelClick)
});