import Swiper, {Navigation} from 'swiper';

const swiper = new Swiper('.coaches__wrapper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.coaches__button--right',
    prevEl: '.coaches__button--left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});

export {swiper};
