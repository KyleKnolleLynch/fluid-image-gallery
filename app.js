const modal = document.querySelector('.modal');
const smalls = document.querySelectorAll('.gallery img');
const large = document.querySelector('.img-large');
const subcaption = document.querySelector('.subcaption');
const attrLarge = document.querySelector('.attr-large');

smalls.forEach((small) => {
  small.addEventListener('click', () => {
    modal.classList.add('show');
    large.classList.add('show');

    const originSrc = small.getAttribute('data-origin');
    large.src = `./assets/large/${originSrc}`;

    const altText = small.alt;
    subcaption.textContent = altText;

    const attr = small.nextElementSibling.innerHTML;
    attrLarge.innerHTML = attr;
  });
});

modal.addEventListener('click', (e) => {
  e.target.classList.contains('modal') &&
    (modal.classList.remove('show'), large.classList.remove('show'));
});
