/* ==========================================================a 버튼 이동 없앰 */
const links = document.querySelectorAll("a");
links.forEach((a) => {
    a.addEventListener("click", (e) => {
    if (a.getAttribute("href") == "#") {
        e.preventDefault();
    }
    });
});
