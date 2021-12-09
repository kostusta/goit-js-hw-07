import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" alt="">
    </div>
`);

const refs = {
  gallery: document.querySelector('.gallery'),
  largeImg: instance.element().querySelector('img'),
};

function galleryItemMarkupCreate({ original, preview, description }) {
  const galeryItem = document.createElement('div');
  galeryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = `${original}`;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = `${preview}`;
  galleryImage.dataset.source = `${original}`;
  galleryImage.alt = `${description}`;

  galleryLink.append(galleryImage);
  galeryItem.append(galleryLink);

  return galeryItem;
}

function galleryMarkupCreate(items) {
  return items.map(galleryItemMarkupCreate);
}

function galleryMarkupRendering(element, items) {
  return element.append(...galleryMarkupCreate(items));
}

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target === refs.gallery) {
    return;
  }

  refs.largeImg.src = event.target.dataset.source;
  refs.largeImg.alt = event.target.alt
  instance.show();
}

galleryMarkupRendering(refs.gallery, galleryItems);
refs.gallery.addEventListener('click', onGalleryClick);
