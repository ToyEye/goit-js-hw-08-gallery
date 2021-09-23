import galleryItems from '../app.js';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  bigImageContainer: document.querySelector('div.lightbox'),
  closeBtn: document.querySelector('.lightbox__button'),
  imageInBoxRef: document.querySelector('.lightbox__image'),
  overLay: document.querySelector('.lightbox__overlay'),
}

const galleryMarkUp = createWeb(galleryItems);

function createWeb(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
     <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}
  ).join('')
};

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);
refs.galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
  if (e.target.classList.add('is-open')) {
    return;
  } else {
  refs.bigImageContainer.classList.add('is-open');
    refs.imageInBoxRef.src = e.target.dataset.source;
    refs.imageInBoxRef.alt = e.target.alt;
  }
  
  stopDefAction(e)
}

function stopDefAction(e) {
  e.preventDefault();
}

refs.closeBtn.addEventListener('click', closeModalWindow);

function closeModalWindow() {
  refs.bigImageContainer.classList.remove('is-open');
  refs.imageInBoxRef.src = '';
}

refs.overLay.addEventListener('click', closeModalWindow);

window.addEventListener('keydown', closeModalWindowByEsc);

function closeModalWindowByEsc(e) {
  if (e.keyCode === 27) {
    closeModalWindow()
  }
}

