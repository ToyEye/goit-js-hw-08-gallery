import galleryItems from '../app.js';

const refs = {
  galleryContainerRef: document.querySelector('.js-gallery'),
  overlayWindow: document.querySelector('.lightbox__overlay'),
  imgRef: document.querySelector('.lightbox__image'),
  imgLink:document.querySelector('.gallery__link'),
  modalWindow: document.querySelector('div.lightbox'),
  closeBtn: document.querySelector('.lightbox__button'),
}

const cartMarkUp = createWeb(galleryItems);

function createWeb(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
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

refs.galleryContainerRef.insertAdjacentHTML('beforeend', cartMarkUp);

refs.galleryContainerRef.addEventListener('click',onImageClick);

function onImageClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return
  } else {
    refs.modalWindow.classList.add('is-open');
    refs.imgRef.src = evt.target.dataset.source;
    refs.imgRef.alt = evt.target.alt;

  };
  stopDefAction(evt);

}

function stopDefAction(evt) {
  evt.preventDefault();
  }

refs.closeBtn.addEventListener('click', closeModalWindow);

function closeModalWindow() {
  refs.modalWindow.classList.remove('is-open');
  refs.imgRef.src = '';
}

window.addEventListener('keydown', closeModalEsc);

function closeModalEsc(evt) {
  if (evt.keyCode === 27) {
    closeModalWindow();
  }
}

