/* 헤더, 푸터 동작 */

/* --------------------------------------상단 배너광고 없애기 */
const deletAdBtn = document.querySelector('.delet');

deletAdBtn.addEventListener('click',()=>{

    const topAd = document.getElementById('top_ad');
    topAd.style.display = 'none'
})