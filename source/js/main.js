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

rightButton.addEventListener('click', () => {
  index = index + 1;
  showReview();
});

leftButton.addEventListener('click', () => {
  index = index - 1;
  showReview();
});

const showReview = () => {
  if (index >= reviews.length) {
    index = reviews.length;
  }
  if (index < 1) {
    index = 1;
  }
  reviews.forEach((review) => {
    review.classList.remove('is-active');
    review.classList.add('is-close');
  });
  reviews[index - 1].classList.add('is-active');
};
