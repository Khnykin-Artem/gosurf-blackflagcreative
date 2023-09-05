import isWebp from './isWebp.js';

isWebp();

const prevArrow =
  '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">';
const nextArrow =
  '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">';

$(() => {
  $('.header-slider').slick({
    infinite: true,
    fade: true,
    prevArrow,
    nextArrow,
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header-slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow,
    nextArrow,
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
    prevArrow,
    nextArrow,
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg"></div><div class="quantity-button quantity-down"><img src="images/minus.svg"></div></div>'
  ).insertAfter('.quantity input');
  $('.quantity').each(function () {
    const spinner = $(this);
    const input = spinner.find('input[type="number"]');
    const btnUp = spinner.find('.quantity-up');
    const btnDown = spinner.find('.quantity-down');
    const min = input.attr('min');
    const max = input.attr('max');

    btnUp.click(() => {
      const oldValue = parseFloat(input.val());
      let newVal = null;
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(() => {
      const oldValue = parseFloat(input.val());
      let newVal = null;
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });
});
