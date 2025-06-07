document.addEventListener("DOMContentLoaded", () => {

    'use strict'

    const bgLeft = document.querySelector("#bg-paper-left");
    const bgRight = document.querySelector("#bg-paper-right");
    const header = document.querySelector('.header');
    const ScrollItems = document.querySelectorAll('.slide-up');
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('#form');
    const select = document.querySelector('#choice');
    const menuContainer = document.querySelector('.menu-container');

    let scrollX;
    let scrollY;

    function scrollObserver(){
        ScrollItems.forEach(Item => {

            if (isPartiallyVisible(Item)) {
                Item.classList.add('slide-up-active');
            }
            else if (Item.classList.contains('slide-up-active')) {
                Item.classList.remove('slide-up-active');
            }
         });
        if (isPartiallyVisible(formContainer)) {
            formContainer.classList.add('form-container-active');
        }
        else if (formContainer.classList.contains('form-container-active')) {
            formContainer.classList.remove('form-container-active');
        }

    }
    function headerObserver() {

        if (window.scrollY > 0 && !header.classList.contains('header-active')) {
            header.classList.add('header-active');
        }
        else if (window.scrollY <= 0 && header.classList.contains('header-active')) {
            header.classList.remove('header-active');
        }
    }
    function scrollHandler() {

        scrollX = window.scrollX;
        scrollY = window.scrollY;

        headerObserver(scrollY);
        scrollObserver();
        elTranslate(bgLeft,0, scrollY * 0.01);
        elTranslate(bgRight,0, scrollY * -0.1);

        requestAnimationFrame(scrollHandler);
    }
    function menuHandler(e){

        if (e.target.nodeName === 'A') {

            setSelectOption(select, e.target.dataset.cardName);
            select.dispatchEvent(new Event('change'));
            e.stopPropagation();
        }
    }
    function arrowHandler(e){



    }

    // Entry Point
    scrollHandler();
    menuContainer.addEventListener('click', menuHandler);
    validateForm(form, select,'thanks');
});