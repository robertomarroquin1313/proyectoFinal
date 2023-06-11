function initializeSwiper(){
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 3000, // Tiempo en milisegundos entre cada cambio de slide
          disableOnInteraction: false, // Permite la interacción del usuario con el swiper mientras se está reproduciendo automáticamente
      },
    });
}