window.addEventListener("DOMContentLoaded", () => {
// hamburger menun
    let hamburgerBtn = document.querySelector(".header__hamburger-btn");
    let hamburderContent = document.querySelector(".hamburger-content");
    function hamburger() {
        hamburgerBtn.addEventListener("click",()=> {
            hamburgerBtn.classList.toggle("btn-active");
            hamburderContent.classList.toggle("hamburger-active");
        });
    }
    // close hamburger menu without btn
    document.addEventListener("click",(e)=> {
        const click = e.composedPath().includes(hamburderContent);
        const btnClick = e.composedPath().includes(hamburgerBtn);
        if(!click && !btnClick) {
            hamburgerBtn.classList.remove("btn-active");
            hamburderContent.classList.remove("hamburger-active");
        }
    });
    hamburger();

    // tabs
});