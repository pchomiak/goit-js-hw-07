import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');

let array = [];
galleryItems.forEach(element => {

  const link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = element.original;
 
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = element.preview;
  img.alt = element.description;
  link.append(img);
  
  array.push(link);
});

gallery.append(...array);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});


