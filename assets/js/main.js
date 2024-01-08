// hero section slider 

var swiper = new Swiper(".onlineSwiperHero", {
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
      },
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-hero-next",
        prevEl: ".custom-swiper-hero-prev",
    },
});

// product slider 

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 20000,
    },
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 10,
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
// testimonial slider 

var swiper = new Swiper(".review", {
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-review-next",
        prevEl: ".custom-swiper-review-prev",
    },
});

// online order slider 

var swiper = new Swiper(".onlineSwiper", {
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
      },
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
});


// navbar 

// var nav = document.getElementById('site-menu');

// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 400 && window.innerWidth > 1024) {
//         nav.classList.add('nav-sticky');
//     } else {
//         nav.classList.remove('nav-sticky');
//     }
// });

function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.add('close');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

// online order menu

function menuToggle() {
    var btn = document.getElementById('menuOnline');
    btn.classList.toggle('menu-order');
    btn.classList.toggle('menu-order-close');
}

