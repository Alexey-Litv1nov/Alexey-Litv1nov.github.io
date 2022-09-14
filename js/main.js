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

    window.addEventListener("scroll",()=> {
        scrollFunction();
    })

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
    console.log(imgContent[0]);

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

    tabsParent.addEventListener("click",(event)=> {
        const target = event.target;
        if(target && target.classList.contains('tab-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    console.log(item + " " + i);
                    showTabContent(i);
                }
            });
        }
    })

    showTabContent(0);


    // db
    fetch('http://localhost:3000/combo').then((data)=> {
            return data.json();
        }).then((res)=> {
            console.log(res);
        });
});

// let tabs = document.querySelectorAll('.tabheader__item'),
// tabsContent = document.querySelectorAll('.tabcontent'),
// tabsParent = document.querySelector('.tabheader__items');

// function hideTabContent() {

// tabsContent.forEach(item => {
//     item.classList.add('hide');
//     item.classList.remove('show', 'fade');
// });

// tabs.forEach(item => {
//     item.classList.remove('tabheader__item_active');
// });
// }

// function showTabContent(i = 0) {
// tabsContent[i].classList.add('show', 'fade');
// tabsContent[i].classList.remove('hide');
// tabs[i].classList.add('tabheader__item_active');
// }

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener('click', function(event) {
// const target = event.target;
// if(target && target.classList.contains('tabheader__item')) {
//     tabs.forEach((item, i) => {
//         if (target == item) {
//             hideTabContent();
//             showTabContent(i);
//         }
//     });
// }
// });