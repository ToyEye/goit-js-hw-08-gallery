import galleryItems from '../app.js';

{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}


const galleryContainerRef = document.querySelector('.js-gallery');

const listRef = document.createElement('li');
listRef.classList.add('gallery__item');

const linkRef = document.createElement('a');
linkRef.classList.add('gallery__link');
linkRef.setAttribute('href', 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg');

const imageRef = document.createElement('img');
imageRef.classList.add('gallery__image');
imageRef.setAttribute('src', 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg');
imageRef.setAttribute('data-source', 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg');
imageRef.setAttribute('alt', 'Tulips');

galleryContainerRef.append(listRef,linkRef,imageRef);




// const openModalWindowRef = document.querySelector('js-lightbox');

// openModalWindowRef.addEventListener('click',openMidal)

// function openMidal() {
//     if()
// }