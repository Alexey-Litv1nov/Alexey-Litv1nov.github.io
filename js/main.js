window.addEventListener("DOMContentLoaded", () => {
// hamburger menu
    let hamburgerBtn = document.querySelector(".header__hamburger-btn");
    let hamburgerLinks = document.querySelectorAll(".hamburger-link");
    let hamburderContent = document.querySelector(".hamburger-content");
    // open hamburger menu
    function hamburger() {
        hamburgerBtn.addEventListener("click",()=> {
            hamburgerBtn.classList.toggle("btn-active");
            hamburderContent.classList.toggle("hamburger-active");
        });
    }
    // close hamburger menu without close btn
    document.addEventListener("click",(e)=> {
        const click = e.composedPath().includes(hamburderContent);
        const btnClick = e.composedPath().includes(hamburgerBtn);
        if(!click && !btnClick) {
            hamburgerBtn.classList.remove("btn-active");
            hamburderContent.classList.remove("hamburger-active");
        }
    });
    hamburger();
    // close hamburger menu at click on hamburger link
    hamburgerLinks.forEach((link)=> {
        link.addEventListener("click",(event)=> {
            if(event.target) {
                hamburgerBtn.classList.toggle("btn-active");
                hamburderContent.classList.toggle("hamburger-active");
            }
        });
    })

    // btn-up
    const up = document.querySelector(".page-up");

    window.addEventListener("scroll",()=> {
        scrollFunction();
    })
    // показ кнопки "вверх" при скроле от верхней границы страницы на 600px
    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            up.style.display = "block";
        } else {
            up.style.display = "none";
        }
    }

    // wow js
    // активирует анимацию всплытия элементов, когда пользователь долистывает до
    // конкретного блока
    new WOW().init();

    // tabs
    const tabsParent = document.querySelector(".tab-items");
    const imgContent = document.querySelectorAll(".menu-img");
    const tabs = document.querySelectorAll(".tab-item");

    // функция скрытия контента
    function hideTabContent() {
        imgContent.forEach((elem)=> {
            elem.style.display = "none";
        });
        tabs.forEach((e)=> {
            e.classList.remove("active");
        })
    }

    // показываем нужную картинку по индексу
    function showTabContent(i = 0) {
        hideTabContent();
        imgContent[i].style.display = "block";
        tabs[i].classList.add("active");
    }
    // делегирование событий
    tabsParent.addEventListener("click",(event)=> {
        const target = event.target;
        if(target && target.classList.contains('tab-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });
        }
    })

    showTabContent(0);


    // db
    // отображение данных из db.json
    fetch('http://localhost:3000/combo').then((data)=> {
            return data.json();
        }).then((res)=> {
            console.log(res);
        });
});