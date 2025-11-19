// JavaScript Document
console.log("hi");

const menuButton = document.querySelector('header > button');


menuButton.onclick = function openMenu() {
   const nav = document.querySelector('header nav');
  
  // Voeg class "toonMenu" toe aan nav
  nav.classList.add('toonMenu');
}

const sluitButton = document.querySelector('header nav > button')


sluitButton.onclick = function sluitMenu(){
  const nav = document.querySelector('header nav');
   nav.classList.remove('toonMenu');
}