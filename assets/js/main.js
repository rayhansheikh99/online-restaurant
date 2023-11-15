var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
    },
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 20,
        },
    },
});


// navbar 

var nav = document.getElementById('site-menu');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) { // adjust this value based on site structure and header image height
        nav.classList.add('nav-sticky');
    } else {
        nav.classList.remove('nav-sticky');
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


