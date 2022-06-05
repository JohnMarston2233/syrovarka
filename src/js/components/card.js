const cards = document.querySelectorAll('.card');

let dots;

cards.forEach(item => {
  item.addEventListener('mouseover', (e) => {
    if (e.target.matches('[data-card="img-hover"]')) {
      dots = e.target.parentElement.querySelector('.card__img-dots').querySelectorAll('.card__img-dot');
      dotActive(e.target.dataset.index);
    }
  });
  item.addEventListener('mouseout', (e) => {
    if (e.target.matches('[data-card="img-hover"]')) {
      dots = e.target.parentElement.querySelector('.card__img-dots').querySelectorAll('.card__img-dot');
      dotActive();
    }
  });

  let images = item.querySelectorAll('[data-card="img"]');

  if (images.length > 1) {
    let dotsContainer = item.querySelector('.card__img-dots');
    for (let i = 0; i < images.length; i++) {
      dotsContainer.innerHTML += `
        <span class="card__img-dot"></span>
      `;
    }
    dots = dotsContainer.querySelectorAll('.card__img-dot');
    dotActive();

    let imgHovers = item.querySelectorAll('[data-card="img-hover"]');

    imgHovers.forEach((item, i) => {
      item.setAttribute('data-index', i + 1);
    });
  }
});

function dotActive(i = 0) {
  dots.forEach(item => {
    item.classList.remove('card__img-dot--active');
  });
  dots[i].classList.add('card__img-dot--active');
}
