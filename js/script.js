const toggleBtn = document.querySelector('.toggle-btn');
      const toggleBtnIcon = document.querySelector('.toggle-btn box-icon');
      const dropDownMenu = document.querySelector('.dropdown-menu');
      
      toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open')
      }

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id =  sec.getAttribute('id');
      
      if(top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      };
   });
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
