const swiper = new Swiper('.swiper', {
    // Parámetros opcionales
    direction: 'horizontal',
    loop: true,

    // Paginación
    pagination: {
        el: '.swiper-pagination',
    },

    // Botones de navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Barra de desplazamiento
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});