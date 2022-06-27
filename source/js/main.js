import Swiper, {Navigation} from 'swiper';

const tabs = document.querySelector('.subscriptions');
const contents = document.querySelectorAll('.subscriptions__info');

tabs.addEventListener('click', (evt) => {
  const id = evt.target.dataset.id;
  if (id) {
    contents.forEach((content) => {
      content.classList.remove('is-active');
      content.classList.add('is-close');
    });
    const element = document.getElementById(id);
    element.classList.add('is-active');
  }
});

const rightButton = document.querySelector('.reviews__button--right');
const leftButton = document.querySelector('.reviews__button--left');
const reviews = document.querySelectorAll('.reviews__card');
let index = 1;
leftButton.setAttribute('disabled', 'true');

rightButton.addEventListener('click', () => {
  leftButton.removeAttribute('disabled', 'true');
  index = index + 1;
  showReview();
});

leftButton.addEventListener('click', () => {
  rightButton.removeAttribute('disabled', 'true');
  index = index - 1;
  showReview();
});

const showReview = () => {
  if (index >= reviews.length) {
    index = reviews.length;
    rightButton.setAttribute('disabled', 'true');
  }
  if (index <= 1) {
    leftButton.setAttribute('disabled', 'true');
    index = 1;
  }
  reviews.forEach((review) => {
    review.classList.remove('is-active');
    review.classList.add('is-close');
  });
  reviews[index - 1].classList.add('is-active');
};

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

// Здесь будем хранить координаты прикосновения
const touchCoords = {
  x: 0,
  y: 0,
};

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  // Сохраняем начальные координаты когда прикоснулись
  touchCoords.x = firstTouch.clientX;
  touchCoords.y = firstTouch.clientY;
}

const DETECT_TRESHHOLD = 100;

function handleTouchMove(event) {
  if (!touchCoords.x || !touchCoords.y) {
    return;
  }

  const {x, y} = touchCoords;

  // Сохраняем текущие координаты
  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;

  // Вычисляем разницу
  const xDiff = x - xUp;
  const yDiff = y - yUp;

  // Определяем в какую сторону было больше движения
  const isHorizontal = Math.abs(xDiff) > Math.abs(yDiff);

  if (isHorizontal) {
    // Реагируем только если движение было существенным
    if (Math.abs(xDiff) > DETECT_TRESHHOLD) {
      if (xDiff > 0) {
        index = index + 1;
        showReview();
      } else {
        index = index - 1;
        showReview();
      }
    }
  }
}

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

swiper.init();
const playButton = document.querySelector('[data-button]');
const overlay = document.querySelector('.description__overlay');


function onPlayerReady() {
  playButton.addEventListener('click', () => {
    overlay.classList.add('is-active');
  });
}
onPlayerReady();

document.addEventListener('click', (evt) => {
  if (evt.target !== playButton) {
    overlay.classList.remove('is-active');
  }
});
