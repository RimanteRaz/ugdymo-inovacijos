// NAVBAR:

const navToggle = () => {
    const burger = document.querySelector('.burger');
    const navBar = document.querySelector('.nav-bar');
    const primaryMenu = document.querySelector('.primary-menu');
    const secondaryMenu = document.querySelector('.secondary-menu');
    const navCTA = document.querySelector('.nav-cta');
    

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navBar.classList.toggle('open');
        primaryMenu.classList.toggle('open');
        secondaryMenu.classList.toggle('open');
        navCTA.classList.toggle('open');
    })

}

navToggle();

// $(document).ready(function() {
//     $('.btn-toggle-nav').click(function() {
//         $(this).toggleClass('open');
//     })
// })

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
    
//     burger.addEventListener('click', () => {
//         // Toggle Nav
//         nav.classList.toggle('nav-active');

//         // Animate Nav Links
//         navLinks.forEach((link, index )=> {
//             if(link.style.animation){
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.3}s`
//             }
//         });

//         // Animate Burger Icon
//         burger.classList.toggle('toggle');
//     });

  
// }

// navSlide();

// Masonry Layout for archive pages

let magicGrid = new MagicGrid({
    container: ".archive-grid",
    static: true,
    animate: true,
    gutter: 40  
  });
   
magicGrid.listen();
