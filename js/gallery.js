// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

import galleryItems from '../app.js';

const refs = {
  galleryContainerRef: document.querySelector('.js-gallery'),
  closeBtn: document.querySelector('.lightbox__button'),
  modalWindow:document.querySelector('div.lightbox'),
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

refs.closeBtn.addEventListener('click', openModalWindow);
// galleryContainerRef.addEventListener('click',openModalWindow);



function openModalWindow() {
  refs.modalWindow.classList.toggle('is-open');
}