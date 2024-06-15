'use strict';

{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');

  thumbnails[1].addEventListener('click', () => {
    mainImage.src = thumbnails[1].src;
  });
}