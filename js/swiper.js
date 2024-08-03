const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // autoplay: {
    //     delay: 3000,
    // },
    // speed: 1000,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    keyboard: {
        enabled: true,
    },
});