import { galleryItems } from './gallery-items.js';
// Change code below this lineƒ

const refs = {
  gallery: document.querySelector('.gallery'),
};

function galleryItemMarkupCreate({ preview, original, description }) {
  const galleryItem = document.createElement('a');
  galleryItem.classList.add('gallery__item');
  galleryItem.href = `${original}`;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = `${preview}`;
  galleryImage.alt = `${description}`;

  galleryItem.append(galleryImage);

  return galleryItem;
}

function galleryMarkupCreate(items) {
  return items.map(galleryItemMarkupCreate);
}

function galleryMarkuoRendering(markupContainer, items) {
  return markupContainer.append(...galleryMarkupCreate(items));
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target === refs.gallery) {
    return;
  }
}

galleryMarkuoRendering(refs.gallery, galleryItems);
refs.gallery.addEventListener('click', onGalleryItemClick);

refs.gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
