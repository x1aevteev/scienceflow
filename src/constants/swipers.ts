import type SwiperOptions from 'swiper';

export type Breakpoints = SwiperOptions['breakpoints'];

export const SWIPER_NEWS_BREAKPOINTS: Breakpoints = {
  320: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
};

export const SWIPER_MORE_RECREATIONS_BREAKPOINTS: Breakpoints = {
  768: {
    slidesPerView: 1,
    spaceBetween: 32,
  },
  1024: {
    slidesPerView: 1.5,
    spaceBetween: 32,
  },
  1440: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
  1919: {
    slidesPerView: 2.5,
    spaceBetween: 32,
  },
};
