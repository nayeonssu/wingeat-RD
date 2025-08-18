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
const cateSwiper = new Swiper(".cate-swiper",{
    slidesPerGroup: 1,
    slidesPerView: 9,
    navigation: {
        prevEl: "#category .swiper-button-prev",
        nextEl: "#category .swiper-button-next",
    },
    spaceBetween: 26,
})
/* ==================================================================4행 베스트 상품 */
/* 탭 스와이퍼 */
const tapSwiper = new Swiper(".tap",{
    slidesPerView:'auto',
    spaceBetween:15,
})