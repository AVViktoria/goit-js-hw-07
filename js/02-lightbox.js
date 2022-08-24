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



  
  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  var lightbox = $('.gallery a').simpleLightbox({ /* options */ });

  let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

// with jQuery nearly the same
let gallery = $('.gallery a').simpleLightbox();
gallery.on('show.simplelightbox', function () {
	// do something…
});

