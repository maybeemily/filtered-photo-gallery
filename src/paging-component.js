const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageDisplay = document.getElementById('current-page');
const totalPageDisplay = document.getElementById('total-pages');

const numberPerPage = 8;

function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / numberPerPage);

    totalPageDisplay.textContent = totalPageCount;

    let currentPageNumber = 1;
    
    updatePaging();

    //add event listener to previous and next buttons so they increase or decrease numbers

    prevButton.addEventListener('click', () => {
        currentPageNumber--;

        updatePaging();
    });

    nextButton.addEventListener('click', () => {
        currentPageNumber++;

        updatePaging();
    });

    function updatePaging() {
        currentPageDisplay.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: numberPerPage
        };

        callback(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        prevButton.disabled = currentPageNumber === 1;
    }


}

export default loadPaging;