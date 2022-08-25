const header = document.querySelector('.header')
window.addEventListener('scroll', stickyNav)

function stickyNav() {
    if (window.scrollY > header.offsetHeight + 100) {
        header.classList.add('headerActive')
    } else {
        header.classList.remove('headerActive')
    }
}

// const navSlide = () => {
//     const smallDisplay = document.querySelector('.smallDisplay');
//     const links = document.querySelector('.links');
//     const navLinks = document.querySelector('.nav-links li');

//     smallDisplay.addEventListener('click', () => {
//         links.classList.toggle('nav-active')
//     })
// }
// navSlide()
const smallDisplay = document.querySelector('.smallDisplay');
smallDisplay.addEventListener('click', () => {
    smallDisplay.classList.add('active-links')
})

// function openNav() {
//    if(active-links < openNav){
//     smallDisplay.classList.add('active-links')
//    } else{
//        smallDisplay.classList.remove('active-links')
//    }
// }