let cureent = 0;

const element = $(".header");
gsap.set(element, { y: 0 });

$(window).scroll(function () {
    const scrollPosition = $(this).scrollTop();

    // 반응형 디자인 대응
    if (scrollPosition > 100) {
        gsap.to(element, 0.3, {
            y: -40,
            ease: "none",
        });
    } else {
        gsap.to(element, 0.3, {
            y: 0,
            ease: "none",
        });
    }
});

$("footer .btn-show").click(function () {
    $("footer .naver-info .info-area").toggleClass("show");
});
