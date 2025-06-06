document.addEventListener("DOMContentLoaded", () => {

    const bgLeft = document.querySelector("#bg-paper-left");
    const bgRight = document.querySelector("#bg-paper-right");

    let scrollX;
    let scrollY;

    function scrollHandler() {

        scrollX = window.scrollX;
        scrollY = window.scrollY;

        elTranslate(bgLeft,0, scrollY * 0.01);
        elTranslate(bgRight,0, scrollY * -0.1);

        requestAnimationFrame(scrollHandler);
    }

    scrollHandler();

});