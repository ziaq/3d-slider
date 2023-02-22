document.addEventListener('DOMContentLoaded', function() {
  
  //инициализация слайдера с параметрами
  const showSlider = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true
  })

  document.querySelector('video').playbackRate = 2; // ускоряем видео в два раза

})
