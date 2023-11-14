var swiper = new Swiper(".mySwiper", {
    freeMode: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


// navbar 

var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) { // adjust this value based on site structure and header image height
        nav.classList.add('nav-sticky');
        header.classList.add('pt-scroll');
    } else {
        nav.classList.remove('nav-sticky');
        header.classList.remove('pt-scroll');
    }
});


function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.add('close');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}


