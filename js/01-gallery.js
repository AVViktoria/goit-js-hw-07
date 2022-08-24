import { galleryItems } from './gallery-items.js';
// Change code below this line

//*    Unpacking   galleryItems      

const imagesGalleryContainer  = document.querySelector(".gallery");
const cardsMarkup = element => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
  
};

  const createListElements = galleryItems.map(cardsMarkup).join('');
  console.log(createListElements);
  imagesGalleryContainer.insertAdjacentHTML('beforeend', createListElements);

let instance = null;

//*   Open  by  click   and create instance   
imagesGalleryContainer.addEventListener('click', onPaletteContainerClick);
function onPaletteContainerClick(evt) {
  evt.preventDefault();

  if(!evt.target.classList.contains("gallery__image")){
    return;
  };
const isCurrentImage = evt.target.dataset.source;
instance = basicLightbox.create(
  `<img class = "modal_image" src="${isCurrentImage}"/>`
);
instance.show();
};

  //*   Modal  Window      

function isModalOpen(){
window.addEventListener('keydown', isModalClose);
};

function isModalClose(){
  window.addEventListener('keydown', onKeyPress);
  };

  function onKeyPress(evt){
const ESC_KEY_CODE = 'Escape';
const isKeyCode = evt.code === ESC_KEY_CODE;

if(isKeyCode){
  instance.close();
  window.removeEventListener('keydown', isModalClose)
};
  };