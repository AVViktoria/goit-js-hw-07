import { galleryItems } from './gallery-items.js';
// Change code below this line

//*    Unpacking   galleryItems      

const imagesSwitchGalleryContainer  = document.querySelector(".gallery");
const cardsSwitchMarkup = element => {
  return ` <a class="gallery__item gallery__link" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" class ='gallery__image'/>
</a>`;
};

  const createSwitchListElements = galleryItems.map(cardsSwitchMarkup).join('');
  console.log(createSwitchListElements);
  imagesSwitchGalleryContainer.insertAdjacentHTML('beforeend', createSwitchListElements);

//*   Create   SimpleLightbox

// let lightbox = new SimpleLightbox('.gallery a');
// // $('.gallery__item a',).simpleLightbox({captionsData: "alt",  captionDelay: 250});

// lightbox.on('show.simplelightbox', function () {});
// new SimpleLightbox('.gallery__item a', {captionsData: "alt",  captionDelay: 250});

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});