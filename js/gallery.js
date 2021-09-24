import galleryItem from "../app.js";

const refs = {
    galleryContainer: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('div.lightbox'),
    imageRef: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button'),
    overlay: document.querySelector('.lightbox__overlay'),
}

// refs.galleryContainer.addEventListener('click', createWeb);

const containerMarkUp = createWeb(galleryItem);

function createWeb(galleryItem) {
    return galleryItem.map(({ preview, original, description }) => {
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
            </li>
        `
    }).join('');
}
refs.galleryContainer.insertAdjacentHTML('beforeend', containerMarkUp);

function openModalWindow(e) {
    if (e.target.classList.add('is-open')) {
        return;
    }
    else {
        refs.modalWindow.classList.add('is-open');
        refs.imageRef.src = e.target.dataset.source;
        refs.imageRef.alt = e.target.alt;
    }
    offDev(e);
};

refs.galleryContainer.addEventListener('click', openModalWindow);
refs.modalWindow.addEventListener('click', closeMidalWindow);
// refs.closeBtn.addEventListener('click', closeMidalWindow);
// refs.overlay.addEventListener('click', closeMidalWindow);


function offDev(e) {
    e.preventDefault();
}


function closeMidalWindow() {
    if (!refs.modalWindow.classList.contains('is-open')) {
        return;
    } else {
        refs.modalWindow.classList.remove('is-open');
        refs.imageRef.src = ''
    }
};

window.addEventListener('keydown', closeModalWindowByEsc);


function closeModalWindowByEsc(e) {
    if (e.keyCode === 27) {
        closeMidalWindow();
    }
}

// const filtredMassiv = galleryItem.filter(item => item.original);
// console.log("~ filtredMassiv", filtredMassiv)

// document.addEventListener('keydown', caroesel);

// function caroesel(e) {
//     const currentIndex = galleryItem.indexOf(refs.imageRef.src);
//     if (e.key === 'ArrowLeft') {
//         leftClick(currentIndex)
//     } else if (e.ket === 'ArrowRigth') {
//         rigthClick(currentIndex)
//     }   
// }


// function leftClick(currentIndex) {
//     let nextIndex = currentIndex - 1;
//     if (nextIndex === - 1) {
//         nextIndex = galleryItem.length - 1;
//     }
//     refs.imageRef.src = galleryItem[nextIndex];
// }

// function rigthClick(currentIndex) {
//     let nextIndex = currentIndex + 1;
//     if (nextIndex === galleryItem.length) {
//         nextIndex = galleryItem.length + 1;
//     }
//     refs.imageRef.src = galleryItem[nextIndex];
// }