import isWebp from './isWebp.js';

isWebp();

$(() => {
  $('.header-slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header-slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
    asNavFor: '.slider-map',
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  $('.holder-slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
  });
});
