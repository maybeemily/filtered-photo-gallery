import loadImages from './load-images.js';
import images from '../data/images.js';
import loadFilters from './filter-component.js';
import filteredImages from './filtered-images.js';
import loadPaging from './paging-component.js';
import pageArray from './paging-array.js';



loadPaging(images.length, pagingOptions => {
    const pagedImages = pageArray(images, pagingOptions);
    loadImages(pagedImages);
});

loadFilters(filter => {
    const filtered = filteredImages(images, filter);

    loadImages(filtered);
});




