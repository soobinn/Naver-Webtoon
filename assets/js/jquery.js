var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    // freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".rankSwiper", {
    slidesPerView: 1.03,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".rankSwiper .swiper-pagination",
        clickable: true,
    },
});
let age = [
    "10대여자",
    "10대남자",
    "20대여자",
    "20대남자",
    "30대여자",
    "30대남자",
];
var swiper = new Swiper(".timeSwiper", {
    slidesPerView: 1.03,
    spaceBetween: 0,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<div class="' +
                className +
                '"><span>' +
                age[index] +
                "</span></div>"
            );
        },
    },
});
var swiper = new Swiper(".newSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});
