window.addEventListener("DOMContentLoaded", () => {
// hamburger menun
    let hamburgerBtn = document.querySelector(".header__hamburger-btn");
    let hamburgerLinks = document.querySelectorAll(".hamburger-link");
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
    hamburgerLinks.forEach((link)=> {
        link.addEventListener("click",(event)=> {
            if(event.target) {
                hamburgerBtn.classList.toggle("btn-active");
                hamburderContent.classList.toggle("hamburger-active");
            }
        });
    })

    // btn-up
    let up = document.querySelector(".page-up");
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            up.style.display = "block";
        } else {
            up.style.display = "none";
        }
    }
    
    // wow js
    new WOW().init();
});