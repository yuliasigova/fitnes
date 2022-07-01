import {swiper} from './slider';

const tabs = document.querySelector('.subscriptions');
const contents = document.querySelectorAll('.subscriptions__info');
const buttons = document.querySelectorAll('.subscriptions__button');

if (tabs) {
  tabs.addEventListener('click', (evt) => {
    const id = evt.target.dataset.id;
    if (id) {
      contents.forEach((content) => {
        content.classList.remove('is-active');
        content.classList.add('is-close');
      });
      buttons.forEach((button) => {
        button.classList.remove('is-active');
      });
      const element = document.getElementById(id);
      element.classList.add('is-active');
      evt.target.classList.add('is-active');
    }
  });
}

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

const touchCoords = {
  x: 0,
};

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  touchCoords.x = firstTouch.clientX;
}

const DETECT_TRESHHOLD = 100;

function handleTouchMove(event) {
  if (!touchCoords.x) {
    return;
  }

  const {x} = touchCoords;
  const xUp = event.touches[0].clientX;
  const xDiff = x - xUp;

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

swiper.init();
