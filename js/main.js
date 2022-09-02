$(function(){

    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true, /* Добавляет анимацию при переключении картинок по кнопке */
        autoplay: true, /* Автоматическое перечисление картинок */
        autoplaySpeed: 2000,
    });
});