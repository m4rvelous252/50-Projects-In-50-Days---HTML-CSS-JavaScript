const header = document.getElementById('header');
const title = document.getElementById('title');
const excerp = document.getElementById('excerp');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(() => {
    getData();
}, 2500);

function getData (){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem! '
    profileImg.innerHTML = '<img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'January 1, 2020'

    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    })
    animatedBgTexts.forEach(bgText => {
        bgText.classList.remove('animated-bg-text');
    })
}