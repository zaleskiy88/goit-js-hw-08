// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

//----------------------Modal--------------------

let gallerySimpleLightBox = new SimpleLightbox('.gallery a');
gallerySimpleLightBox.on('show.simplelightbox');
gallerySimpleLightBox.options.captionsData = 'alt';
gallerySimpleLightBox.options.captionDelay = 250;
