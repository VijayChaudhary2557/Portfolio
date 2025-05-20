  AOS.init();
  
  document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed(".typed-text", {
      strings: ["Fullstack Developer", "Mern Stack Developer", "PHP Laravel Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true 
    });

    let d = new Date();
    let year = d.getFullYear()
    year = "© "+ year + " Copyright:";
    document.querySelector('.year').innerHTML = year;
  });


function myFun(){
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.scroll