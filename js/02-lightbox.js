import { galleryItems } from './gallery-items.js';
// Change code below this lineƒ

const refs = {
  gallery: document.querySelector('.gallery'),
};

function galleryItemsMarkupCreate(items) {
  return items
    .map(item => {
      return `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    })
    .join('');
}

function galleryMarkuoRendering(markupContainer, items) {
  markupContainer.innerHTML = galleryItemsMarkupCreate(items);
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target !== document.querySelector('.gallery__image')) {
    return;
  }
}

galleryMarkuoRendering(refs.gallery, galleryItems);
refs.gallery.addEventListener('click', onGalleryItemClick);

refs.gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
