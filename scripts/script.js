// JavaScript Document

const menuButton = document.querySelector('header > button');


menuButton.onclick = function openMenu() {
   const nav = document.querySelector('header nav');
     nav.classList.add('toonMenu');
}

const sluitButton = document.querySelector('header nav > button')


sluitButton.onclick = function sluitMenu(){
  const nav = document.querySelector('header nav');
   nav.classList.remove('toonMenu');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 10) { // zodra je meer dan 10px scrollt
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });