import loadImages from './load-images.js';
import images from '../data/images.js';
import loadFilters from './filter-component.js';
import filteredImages from './filtered-images.js';
import loadPaging from './paging-component.js';
import pageArray from './paging-array.js';
//const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

const totalPageDisplay = document.getElementById('total-pages');

let filtered = null;
const numberPerPage = 8;

let list = filtered ? filtered : images;

loadFilters(filter => {
    
    filtered = filteredImages(images, filter);
    list = filtered ? filtered : images;
    loadImages(list);

    const totalPageCount = Math.ceil(list.length / numberPerPage);

    //FIGURE OUT CURRENT PAGE NUMBER....!!!!
    //let currentPageNumber = (list.length) / numberPerPage ;

    totalPageDisplay.textContent = totalPageCount;
    if(currentPageNumber === totalPageCount) {
        nextButton.classList.add('hidden');
    }

});


loadPaging(list.length, pagingOptions => {
    const pagedImages = pageArray(images, pagingOptions);
    loadImages(pagedImages);
});






