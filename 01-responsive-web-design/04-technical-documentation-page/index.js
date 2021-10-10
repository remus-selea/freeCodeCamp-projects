const projectName = 'technical-docs-page';


let navToggle = document.getElementById('hamburger-menu');
let navMenu = document.getElementById('nav-menu');


function toggleMenu(x) {
    x.classList.toggle("change");
    navMenu.classList.toggle('nav-menu-closed');
  }