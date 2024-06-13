

function classToggle() {
    const navs = document.querySelectorAll('.nav-item')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

function classHeader(){
    const header = document.querySelector("#header");
    header.classList.toggle("rolagem", window.scrollY > 100);
}


window.addEventListener("scroll", classHeader)