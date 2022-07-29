const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
const buttons = document.querySelectorAll('.btn')
let docStyle = getComputedStyle(document.documentElement);

let curCircle = document.querySelectorAll('.circle.active').length;
console.log(curCircle)

const checkFirstLastStep = () => {
    switch (curCircle) {
        case 1:
            buttons[0].disabled = true
            break;
        case circles.length:
            buttons[1].disabled = true
            break
        default:
            buttons.forEach(button => {
                button.disabled = false
            })
            break;
    }
}

checkFirstLastStep();

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if(e.target.id === 'next'){
            curCircle++;
            circles[curCircle-1].style.borderColor = docStyle.getPropertyValue('--line-border-fill')
            const progressWidth = (100/(circles.length-1))*(curCircle-1)
            progress.style.width = progressWidth+'%'
        }
        if(e.target.id === 'prev'){
            circles[curCircle-1].style.borderColor = docStyle.getPropertyValue('--line-border-empty')
            curCircle--;
            const progressWidth = (100/(circles.length-1))*(curCircle-1)
            progress.style.width = progressWidth+'%'
        }
        checkFirstLastStep()
    })
})