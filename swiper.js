 function initializeSwiper(){

src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
crossorigin="anonymous"    
  
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        crossorigin="anonymous"

src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"

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
    }