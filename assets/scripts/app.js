

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




// Fade in Effect

function fadeInSecondTitle() {
  const subtitle = document.getElementById('second-title');
  subtitle.style.opacity = 1; 
}

// Type Writter Effect


const FIRST_TITLE = document.getElementById("first-title");
const TEXT = document.getElementById("first-title").textContent;


function typeWritterEffect(element,text, i = 0){
  
  if( i === 0){
    element.textContent = "";
  }

  
  element.textContent += text[i];

  if(i === text.length - 1){
    fadeInSecondTitle()
    return;
  }


  setTimeout(() => typeWritterEffect(element, text, i + 1), 50)
}

typeWritterEffect(FIRST_TITLE, TEXT);



document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          const offset = -100;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});