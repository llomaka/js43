const images = [
    'image-1.jpeg',
    'image-2.jpeg',
    'image-3.jpeg',
    'image-4.jpeg',
    'image-5.jpeg',
    'image-6.jpeg',
    'image-7.jpeg',
    'image-8.jpeg',
    'image-9.jpeg',
    'image-10.jpeg',
    'image-11.jpeg',
];

const imageGallery = document.querySelector('.image-gallery');
const renderGallery = function () { 
    const markup = images.map(image => `<li><img src="../images/lqip-image.jpeg" data-src="../images/${image}" class="lazyload" alt="cat" loading="lazy" width="1280" height="853" /></li>`).join('');
    imageGallery.insertAdjacentHTML('beforeend', markup);
};
renderGallery();