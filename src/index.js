import makeImageTemplate from './image-template.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

images.forEach(function(image) {
    const dom = makeImageTemplate(image);
    imageList.appendChild(dom);
});