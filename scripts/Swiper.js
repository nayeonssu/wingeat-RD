/* ==================================================================1행 ad */
const adSwiper = new Swiper(".ad-swiper", {
    loop: true,
    autoplay: {delay:4000},
    navigation: {
        nextEl: "#ad .swiper-button-next",
        prevEl: "#ad .swiper-button-prev",
    },
    pagination: {
        el: "#ad .swiper-pagination",
        type: "fraction",
    },
});

/* ==================================================================2행 ad */
const cateSwiper = new Swiper()